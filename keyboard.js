const { chromium } = require('playwright');

(async() => {// anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await chromium.launch({headless:false,slowMo:100});
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://the-internet.herokuapp.com/key_presses');

    // how to handle the keyboard
    // Playwright has a keyboard API for managing a virtual keyboard
    await page.click('input');
    await page.keyboard.type('one does not simply exit vim');
    
    await page.keyboard.down('Shift');

    for(let i=0;i<' exit vim'.length;i++)
    {
        // now we holding the key using this loop 
        await page.keyboard.press('ArrowLeft');
    }
    // how to stop holding the key
    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');

    await page.keyboard.type('walk into mordor');

    // close the browser
    await browser.close();
})();