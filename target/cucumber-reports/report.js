$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("account/login.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Login on Madison Store",
  "description": "As a registered user,\nI want to verify new login into Madison website",
  "id": "verify-login-on-madison-store",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successful login with valid entries",
  "description": "",
  "id": "verify-login-on-madison-store;successful-login-with-valid-entries",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to the madison website \"http://demo-store.seleniumacademy.com/customer/account/login/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userlogins using username as \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login must be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "verify-login-on-madison-store;successful-login-with-valid-entries;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "verify-login-on-madison-store;successful-login-with-valid-entries;;1"
    },
    {
      "cells": [
        "lruizabcde@gmail.com",
        "lima1234"
      ],
      "line": 12,
      "id": "verify-login-on-madison-store;successful-login-with-valid-entries;;2"
    },
    {
      "cells": [
        "lruizabcde@gmail.com",
        "lima12342"
      ],
      "line": 13,
      "id": "verify-login-on-madison-store;successful-login-with-valid-entries;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3146721750,
  "status": "passed"
});
formatter.before({
  "duration": 944485417,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful login with valid entries",
  "description": "",
  "id": "verify-login-on-madison-store;successful-login-with-valid-entries;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to the madison website \"http://demo-store.seleniumacademy.com/customer/account/login/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userlogins using username as \"lruizabcde@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters password as \"lima1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login must be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo-store.seleniumacademy.com/customer/account/login/",
      "offset": 39
    }
  ],
  "location": "Login.user_navigates_to_the_madison_website(String)"
});
formatter.result({
  "duration": 5382173375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lruizabcde@gmail.com",
      "offset": 30
    }
  ],
  "location": "Login.userlogins_using_username_as(String)"
});
formatter.result({
  "duration": 275220542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lima1234",
      "offset": 25
    }
  ],
  "location": "Login.user_enters_password_as(String)"
});
formatter.result({
  "duration": 90547125,
  "status": "passed"
});
formatter.match({
  "location": "Login.login_must_be_successful()"
});
formatter.result({
  "duration": 7348486167,
  "status": "passed"
});
formatter.after({
  "duration": 43000,
  "status": "passed"
});
formatter.after({
  "duration": 101125,
  "status": "passed"
});
formatter.after({
  "duration": 31042,
  "status": "passed"
});
formatter.after({
  "duration": 111376209,
  "status": "passed"
});
formatter.after({
  "duration": 107731458,
  "status": "passed"
});
formatter.before({
  "duration": 933815750,
  "status": "passed"
});
formatter.before({
  "duration": 871676500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful login with valid entries",
  "description": "",
  "id": "verify-login-on-madison-store;successful-login-with-valid-entries;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user navigates to the madison website \"http://demo-store.seleniumacademy.com/customer/account/login/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userlogins using username as \"lruizabcde@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters password as \"lima12342\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "login must be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo-store.seleniumacademy.com/customer/account/login/",
      "offset": 39
    }
  ],
  "location": "Login.user_navigates_to_the_madison_website(String)"
});
formatter.result({
  "duration": 5077379708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lruizabcde@gmail.com",
      "offset": 30
    }
  ],
  "location": "Login.userlogins_using_username_as(String)"
});
formatter.result({
  "duration": 168570958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lima12342",
      "offset": 25
    }
  ],
  "location": "Login.user_enters_password_as(String)"
});
formatter.result({
  "duration": 82910833,
  "status": "passed"
});
formatter.match({
  "location": "Login.login_must_be_successful()"
});
formatter.result({
  "duration": 4449931334,
  "error_message": "java.lang.AssertionError: Message: not found expected [My Account] but found [Customer Login]\n\tat org.testng.Assert.fail(Assert.java:99)\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\n\tat org.testng.Assert.assertEquals(Assert.java:122)\n\tat org.testng.Assert.assertEquals(Assert.java:629)\n\tat com.ecommerce.steps.account.Login.login_must_be_successful(Login.java:50)\n\tat ✽.Then login must be successful(account/login.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 46625,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 257374583,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 166292625,
  "status": "passed"
});
formatter.after({
  "duration": 63847417,
  "status": "passed"
});
formatter.after({
  "duration": 60920208,
  "status": "passed"
});
formatter.uri("account/register.feature");
formatter.feature({
  "line": 1,
  "name": "Create New Account on Madison Store",
  "description": "As a new user,\nI want to create new account  into Maddison Store",
  "id": "create-new-account-on-madison-store",
  "keyword": "Feature"
});
formatter.before({
  "duration": 993454375,
  "status": "passed"
});
formatter.before({
  "duration": 936417750,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User successfully create new Account on Maddison Store",
  "description": "",
  "id": "create-new-account-on-madison-store;user-successfully-create-new-account-on-maddison-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Integration"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the Store Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters all required registration fields",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks in register button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "a store account is created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.user_is_on_the_store_registration_page()"
});
formatter.result({
  "duration": 5650572542,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_enters_all_required_registration_fields()"
});
formatter.result({
  "duration": 465164708,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_clicks_in_register_button()"
});
formatter.result({
  "duration": 1208825375,
  "status": "passed"
});
formatter.match({
  "location": "Register.a_store_account_is_created()"
});
formatter.result({
  "duration": 35298375,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"top\"]/body/div/div[2]/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/span\"}\n  (Session info: headless chrome\u003d92.0.4515.107)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-beta-4\u0027, revision: \u002729f46d02dd\u0027\nSystem info: host: \u0027Luiss-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:cf6:df5f:1059:1582%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [10c74f93a2156e99cd00b60e69165645, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"top\"]/body/div/div[2]/div[2]/div/div[2]/div[2]/div/ul/li/ul/li/span}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: /var/folders/1n/fmlp82gj2b5...}, goog:chromeOptions: {debuggerAddress: localhost:51290}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51290/devtoo..., se:cdpVersion: 92.0.4515.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 10c74f93a2156e99cd00b60e69165645\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:162)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:137)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:612)\n\tat org.openqa.selenium.remote.RemoteWebDriver$Mechanism$2.findElement(RemoteWebDriver.java:1251)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:373)\n\tat com.ecommerce.steps.account.Register.a_store_account_is_created(Register.java:50)\n\tat ✽.Then a store account is created(account/register.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 112197792,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 125088542,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 131814125,
  "status": "passed"
});
formatter.after({
  "duration": 62136333,
  "status": "passed"
});
formatter.after({
  "duration": 57886959,
  "status": "passed"
});
formatter.uri("account/validate.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Accounts on Madison Store",
  "description": "",
  "id": "validate-accounts-on-madison-store",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Password validation",
  "description": "",
  "id": "validate-accounts-on-madison-store;password-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I try to create an account with password \"\u003cPassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see that the password is \"\u003cValid or Invalid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "Too Short",
  "description": "Passwords are invalid if less than 4 characters",
  "id": "validate-accounts-on-madison-store;password-validation;too-short",
  "rows": [
    {
      "cells": [
        "Password",
        "Valid or Invalid"
      ],
      "line": 8,
      "id": "validate-accounts-on-madison-store;password-validation;too-short;1"
    },
    {
      "cells": [
        "abc",
        "invalid"
      ],
      "line": 9,
      "id": "validate-accounts-on-madison-store;password-validation;too-short;2"
    },
    {
      "cells": [
        "ab1",
        "invalid"
      ],
      "line": 10,
      "id": "validate-accounts-on-madison-store;password-validation;too-short;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 912428208,
  "status": "passed"
});
formatter.before({
  "duration": 891724833,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Password validation",
  "description": "Passwords are invalid if less than 4 characters",
  "id": "validate-accounts-on-madison-store;password-validation;too-short;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I try to create an account with password \"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see that the password is \"invalid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 42
    }
  ],
  "location": "Validate.i_try_to_create_an_account_with_password(String)"
});
formatter.result({
  "duration": 540667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 35
    }
  ],
  "location": "Validate.i_should_see_that_the_password_is(String)"
});
formatter.result({
  "duration": 57666,
  "status": "passed"
});
formatter.after({
  "duration": 12375,
  "status": "passed"
});
formatter.after({
  "duration": 62917,
  "status": "passed"
});
formatter.after({
  "duration": 21417,
  "status": "passed"
});
formatter.after({
  "duration": 57680666,
  "status": "passed"
});
formatter.after({
  "duration": 57813541,
  "status": "passed"
});
formatter.before({
  "duration": 801965125,
  "status": "passed"
});
formatter.before({
  "duration": 968224417,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Password validation",
  "description": "Passwords are invalid if less than 4 characters",
  "id": "validate-accounts-on-madison-store;password-validation;too-short;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I try to create an account with password \"ab1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see that the password is \"invalid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ab1",
      "offset": 42
    }
  ],
  "location": "Validate.i_try_to_create_an_account_with_password(String)"
});
formatter.result({
  "duration": 316917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 35
    }
  ],
  "location": "Validate.i_should_see_that_the_password_is(String)"
});
formatter.result({
  "duration": 31083,
  "status": "passed"
});
formatter.after({
  "duration": 14834,
  "status": "passed"
});
formatter.after({
  "duration": 90667,
  "status": "passed"
});
formatter.after({
  "duration": 9708,
  "status": "passed"
});
formatter.after({
  "duration": 57756167,
  "status": "passed"
});
formatter.after({
  "duration": 59083875,
  "status": "passed"
});
formatter.examples({
  "line": 11,
  "name": "Letters and Numbers",
  "description": "Passwords need both letters and numbers to be valid",
  "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers",
  "rows": [
    {
      "cells": [
        "Password",
        "Valid or Invalid"
      ],
      "line": 13,
      "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;1"
    },
    {
      "cells": [
        "abc1",
        "valid"
      ],
      "line": 14,
      "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;2"
    },
    {
      "cells": [
        "abcd",
        "invalid"
      ],
      "line": 15,
      "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;3"
    },
    {
      "cells": [
        "abcd1",
        "valid"
      ],
      "line": 16,
      "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 812528917,
  "status": "passed"
});
formatter.before({
  "duration": 925017583,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Password validation",
  "description": "Passwords need both letters and numbers to be valid",
  "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I try to create an account with password \"abc1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see that the password is \"valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abc1",
      "offset": 42
    }
  ],
  "location": "Validate.i_try_to_create_an_account_with_password(String)"
});
formatter.result({
  "duration": 445750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 35
    }
  ],
  "location": "Validate.i_should_see_that_the_password_is(String)"
});
formatter.result({
  "duration": 27542,
  "status": "passed"
});
formatter.after({
  "duration": 14167,
  "status": "passed"
});
formatter.after({
  "duration": 87667,
  "status": "passed"
});
formatter.after({
  "duration": 15917,
  "status": "passed"
});
formatter.after({
  "duration": 59218375,
  "status": "passed"
});
formatter.after({
  "duration": 57867458,
  "status": "passed"
});
formatter.before({
  "duration": 839535250,
  "status": "passed"
});
formatter.before({
  "duration": 953075875,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Password validation",
  "description": "Passwords need both letters and numbers to be valid",
  "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I try to create an account with password \"abcd\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see that the password is \"invalid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 42
    }
  ],
  "location": "Validate.i_try_to_create_an_account_with_password(String)"
});
formatter.result({
  "duration": 353875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 35
    }
  ],
  "location": "Validate.i_should_see_that_the_password_is(String)"
});
formatter.result({
  "duration": 36084,
  "status": "passed"
});
formatter.after({
  "duration": 10458,
  "status": "passed"
});
formatter.after({
  "duration": 69875,
  "status": "passed"
});
formatter.after({
  "duration": 9584,
  "status": "passed"
});
formatter.after({
  "duration": 60442375,
  "status": "passed"
});
formatter.after({
  "duration": 109740000,
  "status": "passed"
});
formatter.before({
  "duration": 864625833,
  "status": "passed"
});
formatter.before({
  "duration": 866458167,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Password validation",
  "description": "Passwords need both letters and numbers to be valid",
  "id": "validate-accounts-on-madison-store;password-validation;letters-and-numbers;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I try to create an account with password \"abcd1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see that the password is \"valid\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd1",
      "offset": 42
    }
  ],
  "location": "Validate.i_try_to_create_an_account_with_password(String)"
});
formatter.result({
  "duration": 339500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 35
    }
  ],
  "location": "Validate.i_should_see_that_the_password_is(String)"
});
formatter.result({
  "duration": 47125,
  "status": "passed"
});
formatter.after({
  "duration": 11834,
  "status": "passed"
});
formatter.after({
  "duration": 61833,
  "status": "passed"
});
formatter.after({
  "duration": 6875,
  "status": "passed"
});
formatter.after({
  "duration": 57802125,
  "status": "passed"
});
formatter.after({
  "duration": 57573625,
  "status": "passed"
});
formatter.uri("shopping/cart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart on Madison Store",
  "description": "As a visitor of the ecommerce website\n\tI want to have a shopping basket\n\tSo that I can see the products and costs of what I want to purchase",
  "id": "shopping-cart-on-madison-store",
  "keyword": "Feature"
});
formatter.before({
  "duration": 773345375,
  "status": "passed"
});
formatter.before({
  "duration": 859458542,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Cart - Adding a product to basket",
  "description": "",
  "id": "shopping-cart-on-madison-store;cart---adding-a-product-to-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on a product detail page \"http://demo-store.seleniumacademy.com/chelsea-tee-703.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select the size/colour/quantity",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the product is added to my shopping basket",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo-store.seleniumacademy.com/chelsea-tee-703.html",
      "offset": 31
    }
  ],
  "location": "Shopping.i_am_on_a_product_detail_page(String)"
});
formatter.result({
  "duration": 7543425417,
  "status": "passed"
});
formatter.match({
  "location": "Shopping.i_select_the_size_colour_quantity()"
});
formatter.result({
  "duration": 446771083,
  "status": "passed"
});
formatter.match({
  "location": "Shopping.i_click_the_add_to_basket_button()"
});
formatter.result({
  "duration": 4087405958,
  "status": "passed"
});
formatter.match({
  "location": "Shopping.the_product_is_added_to_my_shopping_basket()"
});
formatter.result({
  "duration": 300125,
  "status": "passed"
});
formatter.after({
  "duration": 97084,
  "status": "passed"
});
formatter.after({
  "duration": 17792,
  "status": "passed"
});
formatter.after({
  "duration": 7666,
  "status": "passed"
});
formatter.after({
  "duration": 109111041,
  "status": "passed"
});
formatter.after({
  "duration": 59870959,
  "status": "passed"
});
formatter.before({
  "duration": 877090375,
  "status": "passed"
});
formatter.before({
  "duration": 819706375,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Cart - Opening the shopping basket",
  "description": "",
  "id": "shopping-cart-on-madison-store;cart---opening-the-shopping-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I have added an item to my shopping bag",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I am on a home page \"http://demo-store.seleniumacademy.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click the shopping cart icon",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I land on the shopping cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I can see the product in my shopping cart",
  "keyword": "And "
});
formatter.match({
  "location": "Shopping.i_have_added_an_item_to_my_shopping_bag()"
});
formatter.result({
  "duration": 41750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo-store.seleniumacademy.com/",
      "offset": 21
    }
  ],
  "location": "Shopping.i_am_on_a_home_page(String)"
});
formatter.result({
  "duration": 7167867791,
  "status": "passed"
});
formatter.match({
  "location": "Shopping.i_click_the_shopping_bag_icon()"
});
formatter.result({
  "duration": 3058179417,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027skip-link skip-cart \u0027]\"}\n  (Session info: headless chrome\u003d92.0.4515.107)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-beta-4\u0027, revision: \u002729f46d02dd\u0027\nSystem info: host: \u0027Luiss-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:cf6:df5f:1059:1582%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9732e3801b659847999e089ab03aaa21, findElement {using\u003dxpath, value\u003d//a[@class\u003d\u0027skip-link skip-cart \u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: /var/folders/1n/fmlp82gj2b5...}, goog:chromeOptions: {debuggerAddress: localhost:51489}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51489/devtoo..., se:cdpVersion: 92.0.4515.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9732e3801b659847999e089ab03aaa21\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:162)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:137)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:612)\n\tat org.openqa.selenium.remote.RemoteWebDriver$Mechanism$2.findElement(RemoteWebDriver.java:1251)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:379)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:373)\n\tat com.ecommerce.steps.shopping.Shopping.i_click_the_shopping_bag_icon(Shopping.java:62)\n\tat ✽.When I click the shopping cart icon(shopping/cart.feature:13)\n",
  "status": "failed"
});
formatter.match({
  "location": "Shopping.i_land_on_the_shopping_bag_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Shopping.i_can_see_the_product_in_my_shopping_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 246708,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 137710708,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 364236000,
  "status": "passed"
});
formatter.after({
  "duration": 93612125,
  "status": "passed"
});
formatter.after({
  "duration": 108585958,
  "status": "passed"
});
});