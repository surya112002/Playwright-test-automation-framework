const { expect } = require('@playwright/test');

exports.LoginPageObject = class LoginPageObject {

  /**
   * @param {import('@playwright/test').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.txtpassword = page.locator('[data-test="password"]');
    this.lgnbutton = page.getByRole('button', { name: 'LOGIN' });
  }
  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }
  
  async user_enters_username(strusername) {
    await this.username.fill(strusername);
  }

  
  async user_enters_password(strpassword) {
    await this.txtpassword.fill(strpassword);
  }
  
  
  async user_clicks_login() {
    await this.lgnbutton.click();
  }
  

};