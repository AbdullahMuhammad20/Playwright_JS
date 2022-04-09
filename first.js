const { chromium } = require('playwright');

(async() => {
    //function code
    const browser = await chromium.launch({headless:false,slowMo:100});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    await browser.close();
})();