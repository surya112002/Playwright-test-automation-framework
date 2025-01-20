const { expect } = require('@playwright/test');

exports.Onboardingpopup = class Onboardingpopup {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.findonboardingpoup =  page.getByRole('link', { name: 'Onboarding Modal Popup Close' });
    this.txtlabel = page.locator('label');
    this.txtPeterparker=expect(page.getByText('QA Playground Apps View Test Suite Welcome on board! Welcome Peter Parker! 🕷🎉'));


  }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  
  async user_Finds_onboardingpopup() {
    await this.findonboardingpoup.click();
  }
  
  async user_Finds_label() {
    await this.txtlabel.click();
  }
  
  async user_Finds_peterparkertext() {
    await this.txtPeterparker.toBeVisible();
  }
  



};