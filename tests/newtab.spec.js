const { test, expect } = require('@playwright/test');
const {Newtab} = require('../pom_QAplaygroundapp/pageobject_newtab');

test('NewTab', async ({ page }) => {
    const newtab= new Newtab(page);
    await newtab.goto();
    await newtab.user_Finds_newtab();
    await newtab.user_finds_triggerPopup();
    await newtab.user_finds_capturePopupPage();
    await newtab.user_finds_clickButtonAndVerify();
    
  });