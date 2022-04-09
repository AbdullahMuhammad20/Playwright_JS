const { chromium } = require('playwright');

(async() => {
    //function code
    const browser = await chromium.launch({headless:false,slowMo:200});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // code to handle the dropdwon in playwright
    const dropdown = await page.$('#dropdown');
    
    // select the option using >> value

    await dropdown.selectOption({value:'1'});

    // select the option using >> label 

    await dropdown.selectOption({label:'Option 2'});

    // select the option using >> index

    await dropdown.selectOption({index:1});

    // values inside this select 
    const availableOptions = await dropdown.$$('option');

    for(let i = 0; i <availableOptions.length;i++){
        console.log(await availableOptions[i].innerText);
    }

    await browser.close();
})();