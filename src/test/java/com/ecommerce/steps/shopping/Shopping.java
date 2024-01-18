package com.ecommerce.steps.shopping;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Shopping {

	WebDriver driver;

	@Before
	public void setUp() {
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--headless");
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
	}

	@Given("^I am on a product detail page \"([^\"]*)\"$")
	public void i_am_on_a_product_detail_page(String url) throws Throwable {
		driver.get(url);
	}

	@When("I select the size\\/colour\\/quantity")
	public void i_select_the_size_colour_quantity() {
	    driver.findElement(By.xpath("//*[@id=\"swatch22\"]/span[1]")).click();
	    driver.findElement(By.xpath("//*[@id=\"swatch79\"]")).click();
	}
	@When("I click the add to basket button")
	public void i_click_the_add_to_basket_button() {
	    driver.findElement(By.xpath("//*[@id=\"product_addtocart_form\"]/div[3]/div[6]/div[2]/div[2]/button")).click();
	}
	@Then("the product is added to my shopping basket")
	public void the_product_is_added_to_my_shopping_basket() {
	    System.out.println("Chelsea Tee was added to your shopping cart.");
	}


	@Given("I have added an item to my shopping bag")
	public void i_have_added_an_item_to_my_shopping_bag() {
		System.out.println("Chelsea Tee was added to your shopping cart.");
	}

	@When("^I am on a home page \"([^\"]*)\"$")
	public void i_am_on_a_home_page(String url) throws Throwable {
		driver.get(url);
	}

	@When("I click the shopping cart icon")
	public void i_click_the_shopping_bag_icon() throws InterruptedException {
		Thread.sleep(3000);
	    driver.findElement(By.xpath("//a[@class='skip-link skip-cart ']")).click();
	    driver.findElement(By.xpath("//*[@id=\"header-cart\"]/div[3]/div[4]/a")).click();
	}
	@Then("I land on the shopping cart page")
	public void i_land_on_the_shopping_bag_page() {
	    System.out.println("Shopping Cart");
	}
	@Then("I can see the product in my shopping cart")
	public void i_can_see_the_product_in_my_shopping_basket() {
		System.out.println("I can see the product in my shopping cart");
	}

	@After(order = 1)
	public void getScreenFail(Scenario scenario) {
		if (scenario.isFailed()) {
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.attach(screenshot, "image/png", "error");
		}
	}

	@After(order = 0)
	public void tearDown() {
		if (driver != null) {
			driver.close();
		}
	}
}
