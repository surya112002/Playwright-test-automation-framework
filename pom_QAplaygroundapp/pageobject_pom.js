const { expect } = require('@playwright/test');

exports.Pom = class Pom {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.findShadowdom=page.getByRole('link', { name: 'Shadow DOM Click on the' }).click();
    this.txtboost =page.getByRole('button', { name: 'Boost 🚀' });
    this.txtvisible=expect(page.getByRole('main').locator('div').nth(2));


  }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  
  async user_Finds_shadowdom() {
    await this.findShadowdom.click();
  }
  
  async user_Finds_txtboost() {
    await this.txtboost.click();
  }
  
  async user_Finds_percent() {
    await this.txtvisible.toBeVisible();
  }
  



};