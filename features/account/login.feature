Feature: Verify Login on Madison Store 
	As a registered user,
	I want to verify new login into Madison website
@login 
Scenario Outline: Successful login with valid entries 
	Given user navigates to the madison website "http://demo-store.seleniumacademy.com/customer/account/login/" 
	When userlogins using username as "<Username>" 
	And user enters password as "<Password>"
	Then login must be successful 
	Examples: 
	|Username|Password|
	|lruizabcde@gmail.com|lima1234|
	|lruizabcde@gmail.com|lima12342|