package com.ecommerce.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
		 glue = "com.ecommerce.steps", 
		 plugin = {"pretty",
			   "summary",
			   "html:target/cucumber-reports/html-report.html",
			   "json:target/cucumber-reports/cucumber.json",
			   "junit:target/cucumber-reports/cucumber.xml",
			  }, 
		 dryRun = false, 
		 monochrome = true)

public class Runner {

}
