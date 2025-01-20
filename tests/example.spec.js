import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';
import { Listitems } from '../pom/swag_labs/pageobject_List_items';
import { Orderpage } from '../pom/swag_labs/pageobject_orderpage';
const{LoginPageObject} =require('../pom/swag_labs/pageobject_login') 
const{ListItems} =require('../pom/swag_labs/pageobject_List_items')
const{OrderPage} =require('../pom/swag_labs/pageobject_orderpage')
[
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' } 
 ].forEach(({ username, password }) => {

  test('saucelabloginpage', async ({ page }) => {
      
    const loginpage= new LoginPageObject(page);
    
    await loginpage.goto();
    await loginpage.user_enters_username(username);
    await loginpage.user_enters_password(password);
    await loginpage.user_clicks_login();


  });
});

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc@gmail.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('12324566');
  await page.getByRole('button', { name: 'LOGIN' }).click();
     
});

test('test1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByText('LOGIN').click();
  await page.getByText('Sauce Labs Backpack').click();
  await page.getByText('ADD TO CART').click();
  await page.locator('[data-icon="shopping-cart"]').click();
  await page.getByText('CHECKOUT').click();
  await page.getByPlaceholder('First Name').fill('abccom');
  await page.getByPlaceholder('Last Name').fill('secretsauce');
  await page.locator('//*[@data-test="postalCode"]').fill('1234');
  await page.getByText('CONTINUE').click();
  await page.locator('//*[text()="FINISH"]').click();
  await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();

  });
test('test2', async ({ page }) => {
 
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByText('LOGIN').click();
  await expect(page.locator('//*[text()="Sorry, this user has been locked out."]')).toBeVisible();
    

});
test('test3', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByText('LOGIN').click();
  await page.getByText('Sauce Labs Backpack').click();
  await page.getByText('ADD TO CART').click();
  await page.locator('[data-icon="shopping-cart"]').isVisible();
  //await page.locator('//*[text()="REMOVE"]').click();
  await expect(page.locator('span[class="fa-layers-counter shopping_cart_badge"]')).toContainText('1');
  
  });

  test('test4', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByText('LOGIN').click();
    await page.locator('.inventory_item').filter({has:page.getByText('Sauce Labs Backpack')}).getByText('ADD TO CART').click();
    await page.locator('.inventory_item').filter({has:page.getByText('Sauce Labs Bike Light')}).getByText('ADD TO CART').click();
    await page.locator('.inventory_item').filter({has:page.getByText('Sauce Labs Bolt T-Shirt')}).getByText('ADD TO CART').click();
    await expect(page.locator('span[class="fa-layers-counter shopping_cart_badge"]')).toContainText('3');
    await page.locator('[data-icon="shopping-cart"]').click();
    await page.locator('.cart_item').filter({has:page.getByText('Sauce Labs Backpack')}).getByText('REMOVE').click();
    //await page.locator('.cart_item').filter({has:page.getByText('Sauce Labs Backpack')}).page.locator('//*[text()="REMOVE"]').click();
    await page.locator('.inventory_item').filter({has:page.getByText('Sauce Labs Bike Light')}).isVisible();
    await page.locator('.inventory_item').filter({has:page.getByText('Sauce Labs Bolt T-Shirt')}).isVisible();
    await expect(page.locator('span[class="fa-layers-counter shopping_cart_badge"]')).toHaveText('2');
  });

    test('test5', async ({ page }) => {
      
      const loginpage= new LoginPageObject(page);
      const list= new ListItems(page);
      const order=new OrderPage(page);
      await loginpage.goto();
      await loginpage.user_enters_username();
      await loginpage.user_enters_password();
      await loginpage.user_clicks_login();
      await list.user_clicks_saucelabbackpacks();
      await list.user_clicks_addtocart();
      await list.user_clicks_shoppingcarticon();
      await order.user_clicks_checkoutbtn();
      await order.user_enters_firstname();
      await order.user_enters_lastname();
      await order.user_enters_postalcode();
      await order.user_clicks_continuebtn();
      await order.user_clicks_finishbtn();
      await order.user_assert_thankyou();
  });
  
   
    test('test6', async ({ page }) => {
      const loginpage= new LoginPageObject(page);
      await loginpage.goto();
      await loginpage.user_enters_username();
      await loginpage.user_enters_password();
      await loginpage.user_clicks_login();
     });
     
     test('test7', async ({ page }) => {
      const list= new Listitems(page);
      list.user_clicks_saucelabbackpacks
      list.user_clicks_addtocart();
      list.user_clicks_shoppingcarticon();
      });
    

   
    test('test8', async ({ page }) => {
      
      const loginpage= new LoginPageObject(page);
       await loginpage.goto();
      await loginpage.user_enters_username('lockedoutuser');
      await loginpage.user_enters_password('secret-sauce');
      await loginpage.user_clicks_login();
    });
    test('testApi1', async ({ page,request }) => {
      //const issues = await request.get('http://34.45.142.80:8180/api/catalogue-rest/product/15');
      //console.log(await issues.json());
       let email = Math.random().toString().substring(2,12) + "@nomail.com";
       const registerUserResponse = await request.post('http://34.45.142.80:8180/api/customer-rest/customer/register',{
      data:{
        "err": "",
        "firstName": "surya",
        "lastName": "r",
        "email": "wtn@gmail.com",
        "password": "123459",
        "confirmpassword": "123459"
    }
    
  });
      expect(registerUserResponse.status()).toEqual(200);
      expect(registerUserResponse.statusText()).toEqual("OK");
       console.log(registerUserResponse);
       console.log(await registerUserResponse.json());
      });
      [
        { username: 'standard_user', password: 'secret_sauce' },
        { username: 'locked_out_user', password: 'secret_sauce' },
        { username: 'problem_user', password: 'secret_sauce' } 
       ].forEach(({ username, password }) => {
      
        test('saucelabloginpage1', async ({ page }) => {
            
          test("mocks a fruit and doesn't call api", async ({ page }) => {
            // Mock the api call before navigating
            await page.route('*/**/api/v1/fruits', async route => {
              const json = [{ name: 'Strawberry', id: 21 },{ name: 'Orange', id: 22 },{ name: 'giwi', id: 23 }];
              await route.fulfill({ json });
            });
      
      
        });
       
       
       
        [
          { username: 'standard_user', password: 'secret_sauce' },
          { username: 'locked_out_user', password: 'secret_sauce' },
          { username: 'problem_user', password: 'secret_sauce' } 
         ].forEach(({ username, password }) => {
        
          test('saucelabloginpage 2', async ({ page }) => {
              
            await page.goto("https://www.saucedemo.com/v1/");
            await page.pause();
            await expect(page.getByPlaceholder('Username')).toHaveScreenshot({ maxDiffPixels: 100 });
        
          });
        });
 
        test('SpiderMan', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.getByRole('link', { name: 'Dynamic Table Find the Spider' }).click();
          await expect(page.locator("//*[text()='Spider-Man']/ancestor::tr[1]/td[3]/span")).toContainText('Peter Parker');
        });
 
        test('Account verify', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.getByRole('link', { name: 'Verify Your Account Enter' }).click();
          await page.locator('.code').first().fill('9');
          await page.locator('input:nth-child(2)').fill('9');
          await page.locator('input:nth-child(3)').fill('9');
          await page.locator('input:nth-child(4)').fill('9');
          await page.locator('input:nth-child(5)').fill('9');
          await page.locator('input:nth-child(6)').fill('9');
          await expect(page.getByText('Success')).toBeVisible();
        });
 
       
        test('Tags', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.getByRole('link', { name: 'Tags Input Box Add and remove' }).click();
          await page.getByRole('textbox').fill('java ');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('javascript');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('python ');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('play');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('wright');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('code');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('tests');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('surya');
          await page.getByRole('textbox').press('Enter');
          await page.getByRole('textbox').fill('expected');
          await page.getByRole('textbox').press('Enter');
          await page.locator('li').filter({ hasText: 'expected' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'surya' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'tests' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'code' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'python' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'play' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'wright' }).locator('i').click();
          await page.locator('li').filter({ hasText: 'node' }).locator('i').click();
          await page.getByText('javascript').click();
          await expect(page.getByRole('textbox')).toBeVisible();
        });
 
        test('Tab', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.goto('https://qaplayground.dev/apps/new-tab/');
          const page1Promise = page.waitForEvent('popup');
          await page.getByRole('link', { name: 'Open New Tab' }).click();
          const page1 = await page1Promise;
          await expect(page1.getByRole('heading', { name: 'Welcome to the new page!' })).toBeVisible();
        });
 
        test('Popup button', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.goto('https://qaplayground.dev/apps/popup/');
          const page1Promise = page.waitForEvent('popup');
          await page.getByRole('link', { name: 'Open' }).click();
          const page1 = await page1Promise;
          await page1.getByRole('button', { name: 'Submit' }).click();
          await expect(page.getByText('Button Clicked')).toBeVisible();
        });
       
       
        test('nestediframe', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.getByRole('link', { name: 'Nested Iframe Click on the' }).click();
          await page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]').getByRole('link', { name: 'Click Me' }).click();
          await expect(page.frameLocator('iframe[name="frame1"]').frameLocator('iframe[name="frame2"]').getByText('Button Clicked')).toBeVisible();
        });

         test('pom ', async ({ page }) => {
          await page.goto('https://qaplayground.dev/');
          await page.getByRole('link', { name: 'Shadow DOM Click on the' }).click();
          await page.getByRole('button', { name: 'Boost 🚀' }).click();
          await expect(page.getByRole('main').locator('div').nth(2)).toBeVisible();
        });
 
           
test('covered elements', async ({ page }) => {
  await page.goto('https://qaplayground.dev/');
  await page.getByRole('link', { name: 'Covered Elements Click on the' }).click();
  await page.getByRole('link', { name: '🐦You found me!' }).click();
  await expect(page.getByRole('link', { name: '🐦You found me!' })).toBeVisible();
});
 

test('Onboarding model popup', async ({ page }) => {
  await page.goto('https://qaplayground.dev/');
  await page.getByRole('link', { name: 'Onboarding Modal Popup Close' }).click();
  await page.locator('label').click();
  await expect(page.getByText('QA Playground Apps View Test Suite Welcome on board! Welcome Peter Parker! 🕷🎉')).toBeVisible();
});


test('mouse hover', async ({ page }) => {
  await page.goto('https://qaplayground.dev/');
  await page.goto('https://qaplayground.dev/apps/mouse-hover/');
  await expect(page.getByText('$24.96')).toBeVisible();
});

test('Navigation menu', async ({ page }) => {
  await page.goto('https://qaplayground.dev/');
  await page.getByRole('link', { name: 'Navigation Menu Open each' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the About Page' })).toBeVisible();
  await page.getByRole('link', { name: 'Go Back' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome to the Blog Page' })).toBeVisible();
  await page.getByRole('link', { name: 'Go Back' }).click();
  await expect(page.getByRole('link', { name: 'Portfolio' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to the Portfolio Page' })).toBeVisible();
  await page.getByRole('link', { name: 'Go Back' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.locator('div').filter({ hasText: 'Welcome to the Contact Page' })).toBeVisible();
  await page.getByRole('link', { name: 'Go Back' }).click();
});





      });
 });


    