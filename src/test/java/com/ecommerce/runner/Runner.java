package com.ecommerce.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
		 glue = "com.ecommerce.steps", 
		 plugin = {"pretty",
			   "summary",
			   "html:test-output/html-report.html",
			   "json:test-output/cucumber.json",
			   "junit:test-output/cucumber.xml",
			  }, 
		 dryRun = false, 
		 monochrome = true)

public class Runner {

}
