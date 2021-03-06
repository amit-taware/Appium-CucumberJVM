$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bmicalculator/test/BMI.feature");
formatter.feature({
  "id": "as-a-health-specialist",
  "description": "I want a BMI Calculator\nSo that I can calculate patient\u0027s Body Mass Index",
  "name": "As a health specialist",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 69978335000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;2",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"25\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"170\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"50\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"17.30\" as bmi and \"Underweight\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 53584198000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 26204667000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 26061677000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.30",
      "offset": 14
    },
    {
      "val": "Underweight",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 5613366000,
  "status": "passed"
});
formatter.after({
  "duration": 16429691000,
  "status": "passed"
});
formatter.before({
  "duration": 79406941000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;3",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"27\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"181\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"80\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"24.42\" as bmi and \"Normal\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "27",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 54435487000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "181",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 23298402000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 25226535000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24.42",
      "offset": 14
    },
    {
      "val": "Normal",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 10949810000,
  "status": "passed"
});
formatter.after({
  "duration": 18158421000,
  "status": "passed"
});
formatter.before({
  "duration": 88886884000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;4",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"27\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"180\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"90\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"27.78\" as bmi and \"Overweight\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "27",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 46555483000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 425358920000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 418.78 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027pun-tawarea-m\u0027, ip: \u0027192.168.43.183\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.7.0_25\u0027\nSession ID: bd81ddd4-81f3-4278-81e3-a67f63c2cb60\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities [{platform\u003dLINUX, app\u003d/Users/tawarea/Appium/workspace/bmicalculator.test/src/test/resources/BMI_Calculator.apk, javascriptEnabled\u003dtrue, browserName\u003d, networkConnectionEnabled\u003dtrue, desired\u003d{platformVersion\u003d4.2, app\u003d/Users/tawarea/Appium/workspace/bmicalculator.test/src/test/resources/BMI_Calculator.apk, platformName\u003dAndroid, deviceName\u003dNexus5, browserName\u003d, appium-version\u003d1.0, deviceType\u003dphone}, locationContextEnabled\u003dfalse, platformVersion\u003d4.2, databaseEnabled\u003dfalse, deviceName\u003dNexus5, platformName\u003dAndroid, deviceType\u003dphone, appium-version\u003d1.0, webStorageEnabled\u003dfalse, warnings\u003d{}, takesScreenshot\u003dtrue}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:81)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:89)\n\tat bmicalculator.pages.HomePage.enterHight(HomePage.java:38)\n\tat bmicalculator.test.stepdef.BMI_Calc_StepDef.Given_I_enter_as_height(BMI_Calc_StepDef.java:25)\n\tat ✽.And I enter \"180\" as height(bmicalculator/test/BMI.feature:8)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "27.78",
      "offset": 14
    },
    {
      "val": "Overweight",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 48230504000,
  "status": "passed"
});
formatter.before({
  "duration": 95428982000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;5",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"28\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"175\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"100\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"32.65\" as bmi and \"Obese\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 53576436000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "175",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 23607563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 28112638000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32.65",
      "offset": 14
    },
    {
      "val": "Obese",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 8416825000,
  "status": "passed"
});
formatter.after({
  "duration": 356206857000,
  "status": "passed"
});
});