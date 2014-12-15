package bmicalculator.pages;

import io.appium.java_client.android.AndroidDriver;

import java.io.File;
import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory {
	public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;

	public void setUpLocal() throws Throwable {
		// Setup for running Appium test in local environment
		System.out.println("Setting desired capabilities");
		DesiredCapabilities capabilities = new DesiredCapabilities();
		File classpathRoot = new File(System.getProperty("user.dir"));
		File appDir = new File(classpathRoot, "src/test/resources");
		File app = new File(appDir, "BMI_Calculator.apk");
//		capabilities.setCapability("appium-version", "1.3.3");
		capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
		capabilities.setCapability("platformName", "Android");
		capabilities.setCapability("deviceName", "Nexus5");
		capabilities.setCapability("platformVersion", "4.2");
//		capabilities.setCapability("deviceType", "phone");
//        capabilities.setCapability("app-package", "com.testomatic.android.bmicalculator");
//        capabilities.setCapability("app-activity", "BMICalculatorActivity");
		capabilities.setCapability("app", app.getAbsolutePath());
        //capabilities.setCapability("app", "sauce-storage:BMI_Calculator.apk");

		 driver = new AndroidDriver(new URL("http://0.0.0.0:4723/wd/hub"), capabilities);
//		driver = new RemoteWebDriver(
//				new URL(
//						"http://amittaware:9ad259d2-f4c3-4721-ba0d-1516597d2c6d@ondemand.saucelabs.com:80/wd/hub"),
//				capabilities);


		waitVar = new WebDriverWait(driver, 90);
	}

	public void tearDown() {
		driver.quit();
	}
}
