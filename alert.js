const { webkit } = require('playwright');

(async() => { // anonymous arrow function
    //function code
    
    // how to launching browser
    const browser = await webkit.launch({headless:false,slowMo:400});
    // how to create a page inside the browser using playwright
    const page = await browser.newPage();
    // navigating to site 
    await page.goto('https://www.demoqa.com/alerts');

    // code to handle the alerts
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        // not that plz, playwriht auomatically dismiss the dialog
    });
    await page.click('#confirmButton');
    
    // how to accept the dialog and send or pass the text to it 
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('my text is this :p');
        // not that plz, playwriht auomatically dismiss the dialog
    });
    await page.click('#promtButton');
    
    
    // close the browser
    await browser.close();
})();