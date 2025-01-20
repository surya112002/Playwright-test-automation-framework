const { expect } = require('@playwright/test');

exports.Account = class Account {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.useraccountclick = page.getByRole('link', { name: 'Verify Your Account Enter' });
    this.txtnumber =page.locator('.code').first();
    this.txtnumber2= page.locator('input:nth-child(2)');
    this.txtnumber3= page.locator('input:nth-child(3)');
    this.txtnumber4= page.locator('input:nth-child(4)');
    this.txtnumber5= page.locator('input:nth-child(5)');
    this.txtnumber6= page.locator('input:nth-child(6)');
    this.txtsuccess =expect(page.getByText('Success'));
}
 
 
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  async user_clicks_account() {
    await this.useraccountclick.click();
  }
  async user_fill_account1() {
    await this.txtnumber.fill('9');
  }

  async user_fill_account2() {
    await this.txtnumber2.fill('9');
  }

  async user_fill_account3() {
    await this.txtnumber3.fill('9');
  }
  async user_fill_account4() {
    await this.txtnumber4.fill('9');
  }
  async user_fill_account5() {
    await this.txtnumber5.fill('9');
  }
  async user_fill_account6() {
    await this.txtnumber6.fill('9');
  }
  async user_finds_success() {
    await this.txtsuccess.toBeVisible();
  }



};