Feature: Create New Account on Madison Store
	As a new user,
	I want to create new account  into Maddison Store
@Smoke @Integration
Scenario: User successfully create new Account on Maddison Store 
	Given User is on the Store Registration page 
	When User enters all required registration fields 
	And User clicks in register button 
	Then a store account is created