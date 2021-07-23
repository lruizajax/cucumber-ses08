package com.ecommerce.steps.account;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login {

	WebDriver driver;

	@Before
	public void setUp() {
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--headless");
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
	}

	@Given("^user navigates to the madison website \"([^\"]*)\"$")
	public void user_navigates_to_the_madison_website(String url) throws Throwable {
		driver.get(url);
	}

	@When("^userlogins using username as \"([^\"]*)\"$")
	public void userlogins_using_username_as(String user) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(user);
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String pass) throws Throwable {
		driver.findElement(By.id("pass")).sendKeys(pass);
	}

	@Then("^login must be successful$")
	public void login_must_be_successful() throws Throwable {
		driver.findElement(By.id("send2")).submit();
		Thread.sleep(3000);
		Assert.assertEquals(driver.getTitle(), "My Account", "Message: not found");
	}

	@After(order = 1)
	public void getScreenFail(Scenario scenario) {
		if (scenario.isFailed()) {
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
	}

	@After(order = 0)
	public void tearDown() {
		if (driver != null) {
			driver.close();
		}
	}
}
