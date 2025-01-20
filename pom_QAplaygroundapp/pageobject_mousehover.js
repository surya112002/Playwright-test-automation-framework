const { expect } = require('@playwright/test');

exports.Mousehover = class Mousehover{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.findmousehover = page.goto('https://qaplayground.dev/apps/mouse-hover/');
    this.txtamount= expect(page.getByText('$24.96'));
    }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  
  async user_Finds_mousehover() {
    await this.findmousehover.click();
  }
  
  async user_Finds_txtamount() {
    await this.user_Finds_txtamount.toBeVisible();
  }
  };