import { Page } from '@playwright/test';

/**
 * Wait for element to be visible and return it
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param timeout - Optional timeout in milliseconds
 */
export async function waitForElement(
    page: Page,
    selector: string,
    timeout: number = 5000
) {
    return await page.locator(selector).waitFor({ state: 'visible', timeout });
}

/**
 * Take a screenshot with descriptive name
 * @param page - Playwright page object
 * @param name - Screenshot name
 */
export async function takeScreenshot(page: Page, name: string) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ path: `screenshots/${name}-${timestamp}.png` });
}

/**
 * Get all text content from an element
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function getElementText(page: Page, selector: string): Promise<string> {
    return await page.locator(selector).textContent() || '';
}

/**
 * Check if element is visible on page
 * @param page - Playwright page object
 * @param selector - Element selector
 */
export async function isElementVisible(page: Page, selector: string): Promise<boolean> {
    return await page.locator(selector).isVisible();
}

/**
 * Clear input field and fill with new value
 * @param page - Playwright page object
 * @param selector - Input field selector
 * @param value - Value to fill
 */
export async function clearAndFill(page: Page, selector: string, value: string) {
    const locator = page.locator(selector);
    await locator.clear();
    await locator.fill(value);
}

/**
 * Perform multiple clicks with delay
 * @param page - Playwright page object
 * @param selectors - Array of selectors to click
 * @param delayMs - Delay between clicks in milliseconds
 */
export async function multiClick(
    page: Page,
    selectors: string[],
    delayMs: number = 500
) {
    for (const selector of selectors) {
        await page.locator(selector).click();
        await page.waitForTimeout(delayMs);
    }
}

/**
 * Get all attribute values from element
 * @param page - Playwright page object
 * @param selector - Element selector
 * @param attribute - Attribute name
 */
export async function getElementAttribute(
    page: Page,
    selector: string,
    attribute: string
): Promise<string | null> {
    return await page.locator(selector).getAttribute(attribute);
}

/**
 * Wait for navigation after action
 * @param page - Playwright page object
 * @param action - Action function that triggers navigation
 */
export async function waitForNavigation(page: Page, action: () => Promise<void>) {
    await Promise.all([
        page.waitForNavigation(),
        action()
    ]);
}
