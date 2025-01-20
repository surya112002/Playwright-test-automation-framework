const { test, expect } = require('@playwright/test');
const {Navigationmenu} = require('../pom_QAplaygroundapp/pageobject_navigationmenu');

test('Navigationmenu', async ({ page }) => {
    const navigationmenu= new Navigationmenu(page);
    await navigationmenu.goto();
    await navigationmenu.user_Finds_navigationmenu();
    await navigationmenu.user_Finds_about();
    await navigationmenu.user_Finds_welcomeabout();
    await navigationmenu.user_Finds_txtback1();
    await navigationmenu.user_Finds_blog();
    await navigationmenu.user_Finds_welcomeblog();
    await navigationmenu.user_Finds_txtback2();
    await navigationmenu.user_Finds_portfolio();
    await navigationmenu.user_Finds_welcomeportfolio();
    await navigationmenu.user_Finds_txtback3();
    await navigationmenu.user_Finds_contact();
    await navigationmenu.user_Finds_welcomecontact();
    await navigationmenu.user_Finds_txtback4();
    

});
  
   









  
