This project demonstrates BDD tests automated on an Android device powered by Cucumber JVM and Appium

This project comes with:

Test app is BMI calculator (https://play.google.com/store/apps/details?id=tools.bmirechner&hl=en)
Prerequisites: (This has been tested on the following system)

Mac OSX 10.8.5
with $ANDROID_HOME environment variable set pointing to your android SDK
Java 1.6
Android SDK 22.2.1
Maven 
adb 1.0.31
JRE 1.7
Appium 1.3.1 (http://appium.io/)
An Android emulator (Nexus5 Android Version 4.3)
Steps:
Create android emulator give name as Nexus5 then start the Appium server &
Build the App/APK (In another terminal)

Execution:

cd to_app_path

mvn clean install

Test Report for local execution

Cucumber report will be generated and available in the below location,

Cucumber Report /target/cucumber/index.html
