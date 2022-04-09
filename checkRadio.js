const { firefox } = require('playwright');

(async() => { // anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await firefox.launch({headless:false,slowMo:100});
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    // check the second checkbox
    const checks =  await page.$$('#main div :nth-child(1) input[type="checkbox"]');
    await checks[1].check();
    await checks[0].uncheck();
    
    // select the second radio button
    const radios =  await page.$$('#main div :nth-child(1) input[type="radio"]');
    await radios[1].check();
    //await radios[1].uncheck();

    // close the browser
    await browser.close();
})();