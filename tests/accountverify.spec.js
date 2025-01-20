const { test, expect } = require('@playwright/test');
const {Account} = require('../pom_QAplaygroundapp/pageobject_account');

test('Account verifys', async ({ page }) => {
    const account = new Account(page);
    await account.goto();
    await account.user_clicks_account();
    await account.user_fill_account1();
    await account.user_fill_account2();
    await account.user_fill_account3();
    await account.user_fill_account4();
    await account.user_fill_account5();
    await account.user_fill_account6();
    await account.user_finds_success();
    
  });
