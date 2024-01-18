package com.ecommerce.steps.account;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Register {

	WebDriver driver;

	@Given("User is on the Store Registration page")
	public void user_is_on_the_store_registration_page() {
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--headless");
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("http://demo-store.seleniumacademy.com/customer/account/create/");
	}

	@When("User enters all required registration fields")
	public void user_enters_all_required_registration_fields() {
		driver.findElement(By.id("firstname")).sendKeys("Pedro");
		driver.findElement(By.id("middlename")).sendKeys("M.");
		driver.findElement(By.id("lastname")).sendKeys("Rojas");
		driver.findElement(By.id("email_address")).sendKeys("aaprojars@gmail.com");
		driver.findElement(By.id("password")).sendKeys("pasawrod1");
		driver.findElement(By.id("confirmation")).sendKeys("pasawrod1");
	}

	@When("User clicks in register button")
	public void user_clicks_in_register_button() {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,500)");
		driver.findElement(By.xpath("//*[@id=\"form-validate\"]/div[2]/button")).submit();
	}

	@Then("a store account is created")
	public void a_store_account_is_created() {
		String expected = "Thank you for registering with Madison Island.";
		String actual = driver
				.findElement(By.xpath("//*[@id=\"top\"]/body/div/div[2]/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/span"))
				.getText();
		Assert.assertEquals(actual, expected, "Some issues creating your account, try Again");
	}

	@After
	public void tearDown() {
		if (driver != null) {
			driver.close();
		}
	}

}
