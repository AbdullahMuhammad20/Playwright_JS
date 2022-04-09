const { chromium } = require('playwright');

(async() => {// anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await chromium.launch({headless:false,slowMo:100});
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://paint.js.org/');

    // how to handle the mouse
    // Playwright has every page has its own mouse and it's accessible with page.mouse
    await page.mouse.move(200,200);

    // here we clicking on the mouse 
    await page.mouse.down();

    await page.mouse.move(400,200);
    await page.mouse.move(400,400);
    await page.mouse.move(200,400);
    await page.mouse.move(200,200);

    // here we relase up the mouse after finish 
    await page.mouse.up();
    
    // close the browser
    await browser.close();
})();