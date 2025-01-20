const { test, expect } = require('@playwright/test');
const {SpiderMan} = require('../pom_QAplaygroundapp/pageobject_spiderman');

test('SpiderMan', async ({ page }) => {
    const spiderMan= new SpiderMan(page);
    await spiderMan.goto();
    await spiderMan.user_Finds_spidermantable();
    await spiderMan.user_Finds_spidermantext();
    await spiderMan.user_Finds_peterparkertext();
    
  });
  
   