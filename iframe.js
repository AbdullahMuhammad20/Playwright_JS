const { webkit } = require('playwright');

(async() => { // anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await webkit.launch({headless:false,slowMo:100});
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://www.demoqa.com/frames');

    // logic to handle the iframes //  you can interact with iframe only using URL and name
    const frame1 = await page.frame({url:/\/sample/});
    const heading1 =  await frame1.$('h1');
    console.log(await heading1.innerText);
    
    
    
    // close the browser
    await browser.close();
})();