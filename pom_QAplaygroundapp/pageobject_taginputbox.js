const { expect } = require('@playwright/test');

exports.Taginput = class Taginput {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.tagsinput = page.getByRole('link', { name: 'Tags Input Box Add and remove' });
    this.txtjava = page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtjavascript=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtpython=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtplay=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtwright=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtcode=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txttests=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtsurya=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtexpected=page.getByRole('textbox');
    this.txtenter=page.getByRole('textbox');
    this.txtremoveexpected=page.locator('li').filter({ hasText: 'expected' }).locator('i');
    this.txtremovesurya= page.locator('li').filter({ hasText: 'surya' }).locator('i');
    this.txtremovetests=page.locator('li').filter({ hasText: 'tests' }).locator('i');
    this.txtremovecode=page.locator('li').filter({ hasText: 'code' }).locator('i');
    this.txtremovepython=page.locator('li').filter({ hasText: 'python' }).locator('i');
    this.txtremoveplay=page.locator('li').filter({ hasText: 'play' }).locator('i');
    this.txtremovewright=page.locator('li').filter({ hasText: 'wright' }).locator('i');
    this.txtremovenode=page.locator('li').filter({ hasText: 'node' }).locator('i');
    this.txtremovejavascript=page.getByText('javascript');
    this.txtboxvsble=expect(page.getByRole('textbox'));




  }
  async goto() {
    await this.page.goto('https://qaplayground.dev/');
  }
  async user_finds_tags_input() {
    await this.tagsinput.click();
  }
  async user_enters_java() {
    await this.txtjava.fill('java ');
  }
  
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
  }
  async user_enters_javascript() {
    await this.txtjavascript.fill('javascript ');
  }
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
  }
  async user_enters_python() {
    await this.txtpython.fill('python ');
  }
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
  }
  async user_enters_play() {
    await this.txtplay.fill('play');
  }
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
  }
  async user_enters_wright() {
    await this.txtwright.fill('wright');
  }
  async  user_clicks_enter() {
    await this.txtenter.press('Enter');
  }
  async user_enters_code() {
    await this.txtcode.fill('code');
  }
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
 }
 async user_enters_code() {
    await this.txttests.fill('tests');
  }
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
 }
 async user_enters_surya() {
    await this.txtsurya.fill('surya');
  }
  async user_clicks_enter() {
    await this.txtenter.press('Enter');
 }
 async user_enters_expected() {
    await this.txtexpected.fill('expected');
  }
async user_clicks_enter() {
    await this.txtenter.press('Enter');
 }
 async user_removes_expected() {
  await this.txtremoveexpected.click();
}
async  user_removes_surya() {
  await this.txtremovesurya.click();
}
async  user_removes_tests() {
  await this.txtremovetests.click();
}
async  user_removes_code() {
  await this.txtremovecode.click();
}
async  user_removes_python() {
  await this.txtremovepython.click();
}
async  user_removes_play() {
  await this.txtremoveplay.click();
}
async  user_removes_wright() {
  await this.txtremovewright.click();
}
async  user_removes_node() {
  await this.txtremovenode.click();
}
async  user_removes_javascript() {
  await this.txtremovejavascript.click();
}
async user_finds_texts() {
  await this.txtboxvsble.toBeVisible();
}


};