import {test, expect} from '@playwright/test';

test('Initialise browser with correct title', async ({page}) => {

    await page.goto('https://dev-estimatorportal-wb-01.azurewebsites.net/'); 
    const title = await page.title();
    expect(title).toBe('Estimator.Web.WebApp');
    test.setTimeout(100000);

    await page.waitForSelector('text=Login', { timeout: 0 });


});

