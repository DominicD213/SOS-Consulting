#include <Wire.h>
#include "Adafruit_MCP23X17.h"
#include <avr/wdt.h>  // Optional: For watchdog-style safety if desired

Adafruit_MCP23X17 mcp;

// Motor PWM pins
const int MOTOR1_PWM = 3;
const int MOTOR2_PWM = 6;
const int MOTOR3_PWM = 9;

// MCP23017 direction control pins
const int M1_IN1 = 10;
const int M1_IN2 = 11;
const int M2_IN1 = 8;
const int M2_IN2 = 9;
const int M3_IN1 = 12;
const int M3_IN2 = 13;

// Encoder pins
const int ENC1_A = 2;   // Interrupt pin
const int ENC1_B = 4;
const int ENC2_A = 7;
const int ENC2_B = 8;
const int ENC3_A = 10;
const int ENC3_B = 11;

// Encoder counters
volatile long encoder1Count = 0;
long encoder2Count = 0;
long encoder3Count = 0;

// ========= Centralized Error Handler =========
void errorHalt(const String& msg) {
  Serial.print("Error");
  Serial.println(msg);
  while (true);
}

void setup() {
  Serial.begin(9600);
  Serial.setTimeout(500);
  delay(500);  // Wait for Serial to initialize

  Serial.println("🔧 Initializing...");

  // I2C check
  Wire.begin();
  Wire.beginTransmission(0x20); // MCP23017 default address
  if (Wire.endTransmission() != 0) {
    errorHalt("No I2C response at 0x20. Check SDA/SCL wiring and power.");
  }

  // Retry MCP init
  bool mcpReady = false;
  for (int i = 0; i < 5; i++) {
    if (mcp.begin_I2C()) {
      mcpReady = true;
      break;
    }
    Serial.print("⚠️ MCP23017 init failed (attempt ");
    Serial.print(i + 1);
    Serial.println("), retrying...");
    delay(500);
  }
  if (!mcpReady) {
    errorHalt("MCP23017 not detected after multiple attempts.");
  } else {
    Serial.println("✅ MCP23017 detected.");
  }

  // Setup motor direction pins
  int dirPins[] = {M1_IN1, M1_IN2, M2_IN1, M2_IN2, M3_IN1, M3_IN2};
  for (int i = 0; i < 6; i++) {
    mcp.pinMode(dirPins[i], OUTPUT);
    mcp.digitalWrite(dirPins[i], LOW);  // default low

    // Optional: test read-back
    mcp.digitalWrite(dirPins[i], HIGH);
    delay(10);
    if (mcp.digitalRead(dirPins[i]) != HIGH) {
      Serial.print(" MCP23017 pin test failed for pin ");
      Serial.println(dirPins[i]);
    }
    mcp.digitalWrite(dirPins[i], LOW); // reset
  }

  // Sanity check PWM pins
  if (digitalPinToTimer(MOTOR1_PWM) == NOT_ON_TIMER) Serial.println("⚠️ Warning: MOTOR1_PWM is not a PWM pin.");
  if (digitalPinToTimer(MOTOR2_PWM) == NOT_ON_TIMER) Serial.println("⚠️ Warning: MOTOR2_PWM is not a PWM pin.");
  if (digitalPinToTimer(MOTOR3_PWM) == NOT_ON_TIMER) Serial.println("⚠️ Warning: MOTOR3_PWM is not a PWM pin.");

  // Setup motor speed pins
  pinMode(MOTOR1_PWM, OUTPUT);
  pinMode(MOTOR2_PWM, OUTPUT);
  pinMode(MOTOR3_PWM, OUTPUT);
  analogWrite(MOTOR1_PWM, 0);
  analogWrite(MOTOR2_PWM, 0);
  analogWrite(MOTOR3_PWM, 0);

  // Setup encoder pins
  pinMode(ENC1_A, INPUT);
  pinMode(ENC1_B, INPUT);
  pinMode(ENC2_A, INPUT);
  pinMode(ENC2_B, INPUT);
  pinMode(ENC3_A, INPUT);
  pinMode(ENC3_B, INPUT);

  // Attach interrupt for Encoder 1
  int encInterrupt = digitalPinToInterrupt(ENC1_A);
  if (encInterrupt == NOT_AN_INTERRUPT) {
    Serial.println("⚠️ WARNING: ENC1_A is not an interrupt-capable pin.");
  } else {
    attachInterrupt(encInterrupt, encoder1ISR, CHANGE);
    Serial.println("✅ Encoder 1 ISR attached.");
  }

  Serial.println("✅ Arduino ready. Waiting for commands...");
}

void loop() {
  // Handle serial commands
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();
    handleCommand(cmd);
  }

  // Poll encoders
  readEncoder2();
  readEncoder3();
}

// =================== Command Handler ===================
void handleCommand(String cmd) {
  if (cmd == "forward") {
    setMotor(M1_IN1, M1_IN2, MOTOR1_PWM, true, 191);
    setMotor(M2_IN1, M2_IN2, MOTOR2_PWM, true, 191);
    setMotor(M3_IN1, M3_IN2, MOTOR3_PWM, true, 191);
    Serial.println("➡️ Motors set to FORWARD");
  } else if (cmd == "backward") {
    setMotor(M1_IN1, M1_IN2, MOTOR1_PWM, false, 191);
    setMotor(M2_IN1, M2_IN2, MOTOR2_PWM, false, 191);
    setMotor(M3_IN1, M3_IN2, MOTOR3_PWM, false, 191);
    Serial.println("⬅️ Motors set to BACKWARD");
  } else if (cmd == "stop") {
    analogWrite(MOTOR1_PWM, 0);
    analogWrite(MOTOR2_PWM, 0);
    analogWrite(MOTOR3_PWM, 0);
    Serial.println(" Motors STOPPED");
  } else if (cmd == "?") {
    Serial.print("Encoder1: "); Serial.println(encoder1Count);
    Serial.print("Encoder2: "); Serial.println(encoder2Count);
    Serial.print("Encoder3: "); Serial.println(encoder3Count);
  } else {
    Serial.print(" Unknown command: ");
    Serial.println(cmd);
  }
}

// =================== Motor Control ===================
void setMotor(int in1, int in2, int pwmPin, bool forward, int speed) {
  if (speed < 0 || speed > 255) {
    Serial.println("⚠️ Invalid speed value!");
    return;
  }

  mcp.digitalWrite(in1, forward ? HIGH : LOW);
  mcp.digitalWrite(in2, forward ? LOW : HIGH);
  analogWrite(pwmPin, speed);
}

// =================== Encoder Functions ===================
void encoder1ISR() {
  bool A = digitalRead(ENC1_A);
  bool B = digitalRead(ENC1_B);
  encoder1Count += (A == B) ? 1 : -1;
}

void readEncoder2() {
  static bool lastA = LOW;
  bool A = digitalRead(ENC2_A);
  if (A != lastA) {
    bool B = digitalRead(ENC2_B);
    encoder2Count += (A == B) ? 1 : -1;
    lastA = A;
  }
}

void readEncoder3() {
  static bool lastA = LOW;
  bool A = digitalRead(ENC3_A);
  if (A != lastA) {
    bool B = digitalRead(ENC3_B);
    encoder3Count += (A == B) ? 1 : -1;
    lastA = A;
  }
}
