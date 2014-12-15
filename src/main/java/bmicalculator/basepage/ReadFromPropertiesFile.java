package bmicalculator.basepage;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class ReadFromPropertiesFile {

	private String fileName;

	public ReadFromPropertiesFile(String environment) {
		this.fileName = environment;
	}

	public String readPropertiesFile(String keyName) {
		String keyValue;
		Properties propertiesObject = new Properties();
		try {
			propertiesObject.load(new FileInputStream("src/test/resources/"
					+ fileName + ".properties"));

		} catch (IOException e) {
			e.printStackTrace();
		}
		keyValue = propertiesObject.getProperty(keyName);
		return keyValue;
	}

	public void writePropertiesFile(String keyName, String password) {
		Properties props = new Properties();
		String propsFileName = "src/test/resources/" + fileName + ".properties";
		try {
			// first load old one:
			FileInputStream configStream = new FileInputStream(propsFileName);
			props.load(configStream);
			configStream.close();
			// modifies existing or adds new property
			props.setProperty(keyName, password);
			// save modified property file
			FileOutputStream output = new FileOutputStream(propsFileName);
			props.store(output, "Password for " + keyName + " changed");
			output.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}