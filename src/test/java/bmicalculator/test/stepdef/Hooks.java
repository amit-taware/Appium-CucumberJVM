package bmicalculator.test.stepdef;

import bmicalculator.appiumtest.AppiumTest;
import bmicalculator.pages.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	DriverFactory df = new DriverFactory();
	AppiumTest at = new AppiumTest();
	
	@Before
	public void beforeHook() throws Throwable {
		df.setUpLocal();
	}

	@After
	public void afterHook(Scenario scenario) {
		df.tearDown(scenario);
	}

}
