const { test, expect } = require('@playwright/test');
const {Onboardingpopup} = require('../pom_QAplaygroundapp/pageobject_onboarding');

test('Obpop', async ({ page }) => {
    const onboardingpopup= new Onboardingpopup(page);
    await onboardingpopup.goto();
    await onboardingpopup.user_Finds_onboardingpopup();
    await onboardingpopup.txtlabel();
    await onboardingpopup.user_Finds_peterparkertext();
  });