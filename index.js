const puppeteer = require('puppeteer');

//based off project on https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial
function run (pagesToScrape) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!pagesToScrape) {
                pagesToScrape = 1;
            }
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://quotes.wsj.com/ATRC");
            let currentPage = 1;
            let dataScrapes = [];
            while (currentPage <= pagesToScrape) {
                let newDataScrape = await page.evaluate(() => {
                    let results = [];
                    let prices = document.querySelectorAll('#quote_val');
                    prices.forEach((price) => {
                        results.push({
                            companyName: "AtriCure, Inc.",
                            currentValue: price.innerText,
                        });
                    });
                    return results;
                });
                dataScrapes = dataScrapes.concat(newDataScrape);
                currentPage++;
            }
            browser.close();
            return resolve(dataScrapes);
        } catch (e) {
            return reject(e);
        }
    })
}
//run program once, log it to console to do as you wish!
run(1).then(console.log).catch(console.error);