const { test, expect } = require('@playwright/test');
const {Popup} = require('../pom_QAplaygroundapp/pageobject_popup');

test('Popup Button', async ({ page }) => {
    const popup= new Popup(page);
    await popup.goto();
    await popup.user_Finds_Popup();
    await popup.user_finds_triggerPopup();
    await popup.user_finds_capturePopupPage();
    await popup.user_finds_clickButtonAndVerify();
    
  });
  
   