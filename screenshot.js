const { chromium } = require('playwright');

(async() => {// anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await chromium.launch({headless:false,slowMo:100});
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://applitools.com/');

    // how to handle the screenshot
    // Playwright has a very simple way to take a screenshot, you just need to use the .page
    // and screenshot method and the path for file 
    
    // here we taking a screenshot and save it at the same directoy 
    await page.screenshot({path:'screenshot.png'});

    // here will take a screenshots of elements
    const logo = await page.$('.logo');
    await logo.screenshot({path:'logo.png'});

    // here will taking a screenshot for the whole page
    await page.screenshot({path:'fullpage.png',fullPage:true});
    
    // close the browser
    await browser.close();
})();