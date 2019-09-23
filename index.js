// const express = require('express');
// const app = express();

const puppeteer = require('puppeteer');

// const  cardholderNameSelector = '#q_name';
const inputXpath = '//*[@id="home-q"]';

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width:600, height:800 })
    await page.goto('https://developer.mozilla.org/en-US/', 
        {waitUntil: 'networkidle2'});
    // await page.waitForSelector(cardholderNameSelector)
    // await page.keyboard.type('Hello World!');

    // await page.waitForXPath(inputXpath);
    // await page.click();
    // await page.keyboard.type('Hello');
    // const html = await page.content();

    await page.focus('#newsletterEmailInput');
    await page.keyboard.type('karnellschultz+testing@gmail.com');
    await page.keyboard.press(String.fromCharCode(13));
    await page.focus('#newsletterPrivacyInput');
    await page.keyboard.press(String.fromCharCode(13));
    // await page.click('#newsletter-submit')
    await page.screenshot({ path: 'email.png'    })


    await browser.close();
})();

//page.waitForSelevtor : waits for select to appear in page
// page.evaluate : avcveprs a func param to be evaluated