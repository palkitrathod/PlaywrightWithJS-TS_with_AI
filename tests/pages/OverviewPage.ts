import { Page, expect } from '@playwright/test';

export class OverviewPage {
    private page: Page;
    private pageTitle = '[data-test="title"]';
    private finishButton = '[data-test="finish"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyOverviewPageVisible() {
        await expect(this.page.locator(this.pageTitle)).toBeVisible();
    }

    async clickFinish() {
        await this.page.locator(this.finishButton).click();
    }
}
