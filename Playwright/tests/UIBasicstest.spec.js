const {test} = require('@playwright/test');

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
 
test('Page fixture Playwright Test', async ({browser, page}) => // fat operator function example and {browser} is global fixture provided by playwright test runner
{
    // Playwright UI or API Code
    // no need to create new context and page as page is already provided by playwright test runner
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); // navigate to the URL

})