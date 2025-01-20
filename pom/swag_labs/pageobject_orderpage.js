const { expect } = require('@playwright/test');

exports.OrderPage = class OrderPage  {

  /**
   * @param {import('@playwright/test').Page} page
   */
  
  constructor(page) {
  this.page=page;
  this.checkoutbtn= page.getByText('CHECKOUT');
  this.firstname= page.getByPlaceholder('First Name');
  this.lastname= page.getByPlaceholder('Last Name');
  this.postalcode= page.locator('//*[@data-test="postalCode"]');
  this.continue= page.getByText('CONTINUE');
  this.finishbtn= page.locator('//*[text()="FINISH"]');
  this.thankyouvisible= expect(page.getByText('THANK YOU FOR YOUR ORDER'));
 }
 async user_clicks_checkoutbtn() {
    await this.checkoutbtn.click();
}
async user_enters_firstname() {
    await this.firstname.fill('abccom');
}
async user_enters_lastname() {
    await this.lastname.fill('secretsauce');
}
async user_enters_postalcode() {
    await this.postalcode.fill('1234');
}
async user_clicks_continuebtn() {
    await this.continue.click();
 }
 async user_clicks_finishbtn() {
    await this.finishbtn.click();
 }
 async user_assert_thankyou() {
    await this.thankyouvisible.toBeVisible();
}
 


}

