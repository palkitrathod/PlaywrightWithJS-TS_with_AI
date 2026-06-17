import { Page, expect } from '@playwright/test';

export class CheckoutPage {
    private page: Page;
    private pageTitle = '[data-test="title"]';
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    private continueButton = '[data-test="continue"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyCheckoutPageVisible() {
        await expect(this.page.locator(this.pageTitle)).toBeVisible();
    }

    async fillFirstName(firstName: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.page.locator(this.lastNameInput).fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await this.page.locator(this.postalCodeInput).fill(postalCode);
    }

    async clickContinue() {
        await this.page.locator(this.continueButton).click();
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.fillFirstName(firstName);
        await this.fillLastName(lastName);
        await this.fillPostalCode(postalCode);
        await this.clickContinue();
    }
}
