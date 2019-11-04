# WebScraper

WebScraper is a Node application for grabbing text off WS Journal Stock pages (or any other pages, should you wish)

## Installation
Install [nvm](https://github.com/coreybutler/nvm-windows/releases) to install node (any version ^10 will do) 

Use the npm to install [puppeteer](https://developers.google.com/web/tools/puppeteer) to install Puppeteer.

```bash
npm i puppeteer --save
```

## Usage

```javascript
const puppeteer = require('puppeteer');

await page.goto("https://quotes.wsj.com/ATRC"); #opens headless Chrome browser (bundled w/ Puppeteer)
let prices = document.querySelectorAll('#quote_val'); #searches for id 
prices.forEach((price) => {currentValue: price.innerText}) #saves inner text to JSON response
```

Run ```node index.js``` to grab the most current price from WSJ and print to the console.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)