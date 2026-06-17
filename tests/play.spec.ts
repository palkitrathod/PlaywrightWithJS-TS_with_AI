import { test, expect } from '@playwright/test';

test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    // Verify that the user is redirected to the products page
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('should display error message with invalid credentials', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    await page.locator('[data-test="username"]').fill('abvdsf');
    await page.locator('[data-test="password"]').fill('asdfsadf');
    await page.locator('[data-test="login-button"]').click();
    // Verify that the error message is displayed
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});