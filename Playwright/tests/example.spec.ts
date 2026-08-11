import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// test words with js , Learning JS for the first time, and learning JS for the second time. also playwright is a testing framework for web applications. It allows developers to write tests in JavaScript or TypeScript to automate browser interactions and verify the behavior of web pages. Playwright supports multiple browsers, including Chromium, Firefox, and WebKit, making it a versatile tool for end-to-end testing.ß