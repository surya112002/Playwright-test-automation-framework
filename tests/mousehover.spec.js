const { test, expect } = require('@playwright/test');
const {Mousehover} = require('../pom_QAplaygroundapp/pageobject_mousehover');

test('Mousehover', async ({ page }) => {
    const mousehover= new Mousehover(page);
    await mousehover.goto();
    await mousehover.user_Finds_mousehover();
    await mousehover.user_Finds_txtamount();
    
    
  });