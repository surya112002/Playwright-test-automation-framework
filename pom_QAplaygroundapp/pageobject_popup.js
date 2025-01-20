const { expect } = require('@playwright/test');

exports.Popup = class Popup {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.findPopup =page.goto('https://qaplayground.dev/apps/popup/');
   
 }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  async user_Finds_Popup() {
    await this.findPopup.click();
  }
  async user_finds_triggerPopup() {
    this.page1Promise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'Open' }).click(); 
  }

  async user_finds_capturePopupPage() {
    this.page1 = await this.page1Promise;  
  }

  async user_finds_clickButtonAndVerify() {
    await this.page1.getByRole('button', { name: 'Submit' }).click(); 
    await expect(this.page.getByText('Button Clicked')).toBeVisible();  
  }



};