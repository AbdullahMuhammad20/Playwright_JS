const { chromium } = require('playwright');

(async() => { // anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await chromium.launch();
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://www.demoqa.com/automation-practice-form');

    // print the element state

    const firstName = await page.$('#firstName');
    const sportCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());

    console.log(await sportCheck.isChecked());
    console.log(await sportCheck.isVisible());

    console.log(await submitBtn.isHidden());
    console.log(await submitBtn.isVisible());

    
    // close the browser
    await browser.close();
})();