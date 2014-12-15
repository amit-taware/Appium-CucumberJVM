package bmicalculator.test.stepdef;

import org.openqa.selenium.WebDriver;

import bmicalculator.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static junit.framework.TestCase.assertTrue;

public class BMI_Calc_StepDef {

	public static WebDriver driver;

	HomePage hp = new HomePage();

	@When("^I enter \"([^\"]*)\" as age$")
	public void Given_I_enter_as_age(String arg1) throws Throwable {
		System.out.println("Entering Age as "+arg1);
		hp.enterAge(arg1);
	}

	@And("^I enter \"([^\"]*)\" as height$")
	public void Given_I_enter_as_height(String arg1) throws Throwable {
		System.out.println("Entering Hight as "+arg1);
		hp.enterHight(arg1);
	}

	@Given("^I enter \"([^\"]*)\" as weight$")
	public void And_I_enter_as_weight(String arg1) throws Throwable {
		System.out.println("Entering Weight as "+arg1);
		hp.enterWeight(arg1);
	}

	@Then("^I should see \"([^\"]*)\" as bmi and \"([^\"]*)\" as category$")
	public void Then_I_should_see_as_bmi_and_as_category(String arg1,
			String arg2) throws Throwable {
		System.out.println("Verifying BMI as per input ");
		assertTrue("Something Went wrong", hp.verifyBMI(arg1, arg2));
	}

}
