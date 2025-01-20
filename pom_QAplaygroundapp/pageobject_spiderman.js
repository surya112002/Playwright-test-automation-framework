const { expect } = require('@playwright/test');

exports.SpiderMan = class SpiderMan {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.findSpidermantable = page.getByRole('link', { name: 'Dynamic Table Find the Spider' });
    this.txtSpiderman = page.getByText('Spider-Man', { exact: true });
    this.txtPeterparker=expect(page.getByText('Peter Parker'));


  }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  
  async user_Finds_spidermantable() {
    await this.findSpidermantable.click();
  }
  
  async user_Finds_spidermantext() {
    await this.txtSpiderman.click();
  }
  
  async user_Finds_peterparkertext() {
    await this.txtPeterparker.toBeVisible();
  }
  



};