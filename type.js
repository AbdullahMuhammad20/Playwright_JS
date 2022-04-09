const { chromium } = require('playwright');

(async() => {
    //function code
    const browser = await chromium.launch({headless:false,slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    // code to type in an email textbox
    const email = await page.$('#email');
    await email.type('abdmohamed033@gmail.com',{delay:50});
    
    // Code to Clicl on buttons
    
    await page.click('#form_submit');

    await browser.close();
})();