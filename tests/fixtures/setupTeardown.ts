import { test as base, Page } from '@playwright/test';

/**
 * Setup and teardown hooks for tests
 * These are optional custom configurations
 */

export const test = base.extend({
    /**
     * beforeEach hook - runs before each test
     */
    beforeEach: async ({}, use) => {
        // Add any setup logic here
        console.log('Setting up test...');
        await use(undefined);
        // Cleanup after test
        console.log('Test completed');
    },
});

/**
 * Global setup function (runs once before all tests)
 * Add this to playwright.config.js if needed:
 * globalSetup: require.resolve('./fixtures/globalSetup.ts')
 */
export async function globalSetup() {
    console.log('🚀 Starting test suite');
    // Add global setup logic here (e.g., API authentication, database setup)
}

/**
 * Global teardown function (runs once after all tests)
 * Add this to playwright.config.js if needed:
 * globalTeardown: require.resolve('./fixtures/globalTeardown.ts')
 */
export async function globalTeardown() {
    console.log('✅ Test suite completed');
    // Add global teardown logic here (e.g., cleanup, reports)
}

/**
 * Screenshot on failure helper
 * Usage: Add to playwright.config.js
 * webServer: {
 *   screenshotOnFailure: true
 * }
 */
export async function screenshotOnFailure(page: Page, testName: string) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({
        path: `screenshots/failure-${testName}-${timestamp}.png`,
        fullPage: true
    });
}
