import { Page, expect } from '@playwright/test';

export class CompletePage {
    private page: Page;
    private completeText = '[data-test="complete-text"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyOrderComplete() {
        await expect(this.page.locator(this.completeText)).toBeVisible();
    }
}
