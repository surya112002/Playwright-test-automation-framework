const { expect } = require('@playwright/test');

exports.ListItems = class Listitems {

  /**
   * @param {import('@playwright/test').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.saucelabbackpacks = page.getByText('Sauce Labs Backpack');
    this.addtocart = page.getByText('ADD TO CART');
    this.shoppingcarticon=page.locator('[data-icon="shopping-cart"]');
    
}

  async user_clicks_saucelabbackpacks() {
    await this.saucelabbackpacks.click();
}
async user_clicks_addtocart() {
    await this.addtocart.click();
}
async user_clicks_shoppingcarticon() {
    await this.shoppingcarticon.click();
}

}

