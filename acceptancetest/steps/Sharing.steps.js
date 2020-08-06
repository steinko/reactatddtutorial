import {Given,When,Then } from 'cucumber'
import puppeteer from 'puppeteer';

const port = process.env.PORT || 3000;
const appPage = `http://localhost:${port}`

         Given('the presenter navigated to the application page', async function () {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
			await page.goto(appPage);
			this.setPage('presenter', page);
         });


         Given('the presenter clicked the button {string}', async function (buttonId) {
           //await this.getPage('presenter').click(`button#${buttonId}`);
        });

  
         When('the observer navigates to the presenter\'s sharing link', function () {
          
         });

   

         Then('the observer should see a message saying {string}', function (string) {
           
         });

