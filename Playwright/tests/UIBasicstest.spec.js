const { test, expect } = require('@playwright/test');

// test('First Playwright Test', async function()
// {
//     // Playwright UI or API Code

// })

test('First Playwright Test', async ({browser}) => // fat operator function example and {browser} is global fixture provided by playwright test runner
{
    // Playwright UI or API Code

    const context = await browser.newContext(); // create new browser context
    const page = await context.newPage(); // create new page in the context

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); // navigate to the URL

})
 
test.only('Second Test', async ({page}) => // fat operator function example and {page} is global fixture provided by playwright test runner
{
    // Playwright UI or API Code
    // no need to create new context and page as page is already provided by playwright test runner
    await page.goto('https://google.com'); // navigate to the URL

    await console.log('The Page Title is: ' + await page.title()); // get the title of the page

   await expect(page).toHaveTitle('Google'); // assert the title of the page

})

// test.only('searches Google, opens Playwright, and extracts page text', async ({ page }) => {
//     await page.goto('https://www.google.com/');

//     const searchBox = page.locator('textarea[name="q"], input[name="q"]');
//     await searchBox.fill('Playwright official website');
//     await searchBox.press('Enter');

//     // Open the official site from the Google results page.
//     await page.locator('a[href*="playwright.dev"]').first().click();
//     await expect(page).toHaveURL(/playwright\.dev/);

//     // Extract the text shown on the Playwright homepage.
//     const pageText = await page.locator('main').innerText();
//     console.log(pageText);

//     await expect(pageText).toContain('Playwright');
// });
