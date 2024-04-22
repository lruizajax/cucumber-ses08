package com.ecommerce.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
		 glue = "com.ecommerce.steps", 
		 plugin = {"pretty",
			   "summary",
			   "json:target/cucumber.json",
			   "junit:target/cucumber.xml",
			   "html:target/cucumber",
			  }, 
		 dryRun = false, 
		 monochrome = true)

public class Runner {

}
