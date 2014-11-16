package bmicalculator.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class HomePage extends DriverFactory {

	public void addContact(String arg1) {
		List<WebElement> textFieldsList = driver.findElements(By
				.className("android.widget.EditText"));
		textFieldsList.get(0).sendKeys(arg1);
		textFieldsList.get(1).sendKeys("70");

	}

	public void enterWeight(String arg1) {
		List<WebElement> textFieldsList = driver.findElements(By
				.className("android.widget.EditText"));
		textFieldsList.get(2).sendKeys(arg1);
	}

	public void validateBMIresult(String arg1, String arg2) {
		// WebElement texts = driver.findElement(By.tagName("staticText"));
		// assertEquals(texts.getText(), "some expected value");
	}

	public void enterAge(String arg1) {
		List<WebElement> textFieldsList = driver.findElements(By
				.className("android.widget.EditText"));
		textFieldsList.get(0).sendKeys(arg1);
	}

	public void enterHight(String arg1) {
		List<WebElement> textFieldsList = driver.findElements(By
				.className("android.widget.EditText"));
		textFieldsList.get(1).sendKeys(arg1);
	}

	public boolean verifyBMI(String arg1, String arg2) {
		List<WebElement> bmilabel = driver.findElements(By
				.className("android.widget.EditText"));
		System.out.println(bmilabel.get(1).getText());
		if (arg2 == bmilabel.get(1).getText())
		{
			return false;
		}
		return true;
	}
}
