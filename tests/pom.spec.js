const { test, expect } = require('@playwright/test');
const {Pom} = require('../pom_QAplaygroundapp/pageobject_pom');

test('Pom', async ({ page }) => {
   const pom= new Pom (page);
   await pom.goto();
    await pom.user_Finds_shadowdom;
    await pom.user_Finds_txtboost;
    await pom.user_Finds_percent;


});
  
  