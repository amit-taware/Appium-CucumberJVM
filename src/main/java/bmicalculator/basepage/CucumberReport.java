package bmicalculator.basepage;

import net.masterthought.cucumber.ReportBuilder;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

public class CucumberReport {

	private static final String jsonPath = "/target/cucumber.json";
	private static final String reportDirectory = "/target/cucumber-html-reports";
	private static final String userDirector = System.getProperty("user.dir");
	public static void main(String[] args) throws Exception {
		GenerateReport();
	}

	private static void GenerateReport() throws Exception {
		File reportOutputDirectory = new File(userDirector + reportDirectory);
		List<String> jsonReportFiles = new ArrayList<String>();
		jsonReportFiles.add(userDirector + jsonPath);
		ReportBuilder reportBuilder = new ReportBuilder(jsonReportFiles,
				reportOutputDirectory, "",
				"Appium Test Result is",
				"cucumber-jvm", true, false, true, true, false, "", true);
		reportBuilder.generateReports();
	}
}
