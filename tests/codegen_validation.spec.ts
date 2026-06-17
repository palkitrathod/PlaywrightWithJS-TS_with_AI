import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  //Test with incorrect credentials  
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abvdsf');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('asdfsadf');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();


  //Test with correct credentials
  await page.locator('[data-test="error"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});