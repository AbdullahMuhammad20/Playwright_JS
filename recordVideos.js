const { chromium } = require('playwright');

(async() => {// anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await chromium.launch({headless:false,slowMo:100});
    // how to create a page inside the browser using playwright

    const context = await browser.newContext({
        recordVideo:{
            // here will set the path that playwriht will save it after finish 
            dir:"./recordings"
        }
    });
    const page = await context.newPage();
    // navigating to site 
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    // how to handle the videos
    // Click on button 
    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading',{state:'hidden'});

    // this step is not needed, but it's for debugging only, remove it if you need ;) 
    await page.waitForTimeout(1000);
    
    // close the browser
    await browser.close();
})();