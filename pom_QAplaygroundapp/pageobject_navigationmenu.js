const { expect } = require('@playwright/test');

exports.Navigationmenu = class Navigationmenu{

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.findNavigationmenu = page.getByRole('link', { name: 'Navigation Menu Open each' });
    this.txtabout = page.getByRole('link', { name: 'About' });
    this.txtwelcomeabout=expect(page.getByRole('heading', { name: 'Welcome to the About Page' }));
    this.txtback1=page.getByRole('link', { name: 'Go Back' });
    this.txtblog=page.getByRole('link', { name: 'Blog' });
    this.txtwelcomeblog=expect(page.getByRole('heading', { name: 'Welcome to the Blog Page' }));
    this.txtback2=getByRole('link', { name: 'Go Back' });
    this.txtportfolio=expect(page.getByRole('link', { name: 'Portfolio' }));
    this.txtwelcomeportfolio=expect(page.getByRole('heading', { name: 'Welcome to the Portfolio Page' }));
    this.txtback3=page.getByRole('link', { name: 'Go Back' });
    this.txtcontact=page.getByRole('link', { name: 'Contact' });
     this.txtwelcomecontact=expect(page.locator('div').filter({ hasText: 'Welcome to the Contact Page' }));
     this.txtback4=page.getByRole('link', { name: 'Go Back' });


}
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  
  async user_Finds_navigationmenu() {
    await this.findNavigationmenu.click();
  }
  
  async user_Finds_about() {
    await this.txtabout.click();
  }
  
  async user_Finds_welcomeabout() {
    await this.txtwelcomeabout.toBeVisible();
  }
  async user_Finds_txtback1() {
    await this.txtback1.click();
  }
  async user_Finds_blog() {
    await this.txtblog.click();
  }
  async user_Finds_welcomeblog() {
    await this.txtwelcomeblog.toBeVisible();
  }
  async user_Finds_txtback2() {
    await this.txtback2.click();
  }
  async user_Finds_portfolio() {
    await this.txtportfolio.click();
  }
  async user_Finds_welcomeportfolio() {
    await this.txtwelcomeportfolio.toBeVisible();
  }
  async user_Finds_txtback3() {
    await this.txtback3.click();
  }
  async user_Finds_contact() {
    await this.txtcontact.click();
  }
  async user_Finds_welcomecontact() {
    await this.txtwelcomecontact.toBeVisible();
  }
  async user_Finds_txtback4() {
    await this.txtback4.click();
  }




};