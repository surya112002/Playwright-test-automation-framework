const { expect } = require('@playwright/test');

exports.Tab = class Tab   {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.txtnestediframe = page.getByRole('link', { name: 'Nested Iframe Click on the' });
    this.txtiniframe=page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]').getByRole('link', { name: 'Click Me' });
    this.txtclick=expect(page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]').getByText('Button Clicked'));


  }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  
  async user_Finds_nestediframe() {
    await this.txtnestediframe.click();
  }
  
  async user_Finds_in_iframe() {
    await this.txtiniframe.click();
  }
  
  async user_clicks_button() {
    await this.txtclick.toBeVisible();
  }
  



};