#include <Wire.h>
#include "Adafruit_MCP23017.h"

Adafruit_MCP23017 mcp;

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

void setup() {
  Wire.begin();
  mcp.begin();

  Serial.begin(9600);

  // Setup motor direction pins
  int dirPins[] = {M1_IN1, M1_IN2, M2_IN1, M2_IN2, M3_IN1, M3_IN2};
  for (int i = 0; i < 6; i++) {
    mcp.pinMode(dirPins[i], OUTPUT);
  }

  // Setup motor speed pins
  pinMode(MOTOR1_PWM, OUTPUT);
  pinMode(MOTOR2_PWM, OUTPUT);
  pinMode(MOTOR3_PWM, OUTPUT);

  // Setup encoder pins
  pinMode(ENC1_A, INPUT);
  pinMode(ENC1_B, INPUT);
  pinMode(ENC2_A, INPUT);
  pinMode(ENC2_B, INPUT);
  pinMode(ENC3_A, INPUT);
  pinMode(ENC3_B, INPUT);

  // Attach interrupt for Encoder 1
  attachInterrupt(digitalPinToInterrupt(ENC1_A), encoder1ISR, CHANGE);

  Serial.println("Arduino ready. Waiting for commands...");
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
  } else if (cmd == "backward") {
    setMotor(M1_IN1, M1_IN2, MOTOR1_PWM, false, 191);
    setMotor(M2_IN1, M2_IN2, MOTOR2_PWM, false, 191);
    setMotor(M3_IN1, M3_IN2, MOTOR3_PWM, false, 191);
  } else if (cmd == "stop") {
    analogWrite(MOTOR1_PWM, 0);
    analogWrite(MOTOR2_PWM, 0);
    analogWrite(MOTOR3_PWM, 0);
  }

  Serial.print("Received command: ");
  Serial.println(cmd);
}

// =================== Motor Control ===================
void setMotor(int in1, int in2, int pwmPin, bool forward, int speed) {
  if (forward) {
    mcp.digitalWrite(in1, HIGH);
    mcp.digitalWrite(in2, LOW);
  } else {
    mcp.digitalWrite(in1, LOW);
    mcp.digitalWrite(in2, HIGH);
  }
  analogWrite(pwmPin, speed);
}

// =================== Encoder Functions ===================
void encoder1ISR() {
  bool A = digitalRead(ENC1_A);
  bool B = digitalRead(ENC1_B);
  if (A == B) encoder1Count++;
  else encoder1Count--;
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
