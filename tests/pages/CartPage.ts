import { Page, expect } from '@playwright/test';

export class CartPage {
    private page: Page;
    private pageTitle = '[data-test="title"]';
    private checkoutButton = '[data-test="checkout"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyCartPageVisible() {
        await expect(this.page.locator(this.pageTitle)).toBeVisible();
        await expect(this.page.locator(this.checkoutButton)).toBeVisible();
    }

    async clickCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }
}
