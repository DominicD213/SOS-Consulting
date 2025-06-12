#include <Wire.h>
#include "Adafruit_MCP23017.h"

Adafruit_MCP23017 mcp;

void setup() {
  Serial.begin(9600);
  mcp.begin();  // Default address 0x20

  // Setup MCP23017 pins as outputs (motor direction pins)
  for (int i = 0; i <= 5; i++) {
    mcp.pinMode(i, OUTPUT);
    mcp.digitalWrite(i, LOW);  // Initialize pins LOW
  }

  // Setup Arduino PWM pins for motor speed control
  pinMode(9, OUTPUT);   // Motor 1 PWM
  pinMode(10, OUTPUT);  // Motor 2 PWM
  pinMode(11, OUTPUT);  // Motor 3 PWM

  // Initialize motors stopped
  analogWrite(9, 0);
  analogWrite(10, 0);
  analogWrite(11, 0);
}

void driveForward() {
  mcp.digitalWrite(0, HIGH);
  mcp.digitalWrite(1, LOW);
  mcp.digitalWrite(2, HIGH);
  mcp.digitalWrite(3, LOW);
  mcp.digitalWrite(4, HIGH);
  mcp.digitalWrite(5, LOW);

  analogWrite(9, 180);
  analogWrite(10, 180);
  analogWrite(11, 180);
}

void stopMotors() {
  analogWrite(9, 0);
  analogWrite(10, 0);
  analogWrite(11, 0);
}

void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');
    cmd.trim();  // Remove whitespace

    if (cmd == "forward") {
      driveForward();
      Serial.println("Driving forward");
    }
    else if (cmd == "stop") {
      stopMotors();
      Serial.println("Motors stopped");
    }
    // You can add more commands here, e.g. backward, left, right

    else {
      Serial.print("Unknown command: ");
      Serial.println(cmd);
    }
  }
}
