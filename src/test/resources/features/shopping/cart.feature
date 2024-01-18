Feature: Shopping Cart on Madison Store
	As a visitor of the ecommerce website
  	I want to have a shopping basket
  	So that I can see the products and costs of what I want to purchase
Scenario: Cart - Adding a product to basket 
	Given I am on a product detail page "http://demo-store.seleniumacademy.com/chelsea-tee-703.html"
	When I select the size/colour/quantity 
	And I click the add to basket button 
	Then the product is added to my shopping basket
Scenario: Cart - Opening the shopping basket 
	Given I have added an item to my shopping bag
	When I am on a home page "http://demo-store.seleniumacademy.com/"
	When I click the shopping cart icon 
	Then I land on the shopping cart page 
	And I can see the product in my shopping cart