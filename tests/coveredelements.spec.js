const { test, expect } = require('@playwright/test');
const {Coveredelements} = require('../pom_QAplaygroundapp/pageobject_coveredelements');

test('Coveredelements', async ({ page }) => {
    const coveredelements= new Coveredelements(page);
    await coveredelements.goto();
    await coveredelements.user_finds_coveredelements();
    await coveredelements.user_finds_youfindme();
    await coveredelements.user_finds_text();

  });
  
   