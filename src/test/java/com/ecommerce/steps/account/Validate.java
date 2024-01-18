package com.ecommerce.steps.account;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class Validate {

	@Given("^I try to create an account with password \"([^\"]*)\"$")
	public void i_try_to_create_an_account_with_password(String arg1) throws Throwable {
	    System.out.println("I try to create an account with password");
	}

	@Then("^I should see that the password is \"([^\"]*)\"$")
	public void i_should_see_that_the_password_is(String arg1) throws Throwable {
	    System.out.println("I should see that the password is");
	}

}
