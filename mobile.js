const { chromium,devices } = require('playwright');

// not that devices method return a dictionalry of devices available
const iPhone = devices['iPhone 11'];

(async() => {// anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await chromium.launch({headless:false,slowMo:300});
    
    const context = await browser.newContext({
        ...iPhone,
        permissions:['geolocation'],
        geolocation:{latitude:19.432608,longitude:-99.133209},
        locale:'fr-FR'
    });

    const page = await context.newPage();
    await page.goto('https://www.google.com/maps');
    await page.waitForTimeout(5000);

    // close the browser
    await browser.close();
})();