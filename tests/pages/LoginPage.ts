import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private usernameInput = '[data-test="username"]';
    private passwordInput = '[data-test="password"]';
    private loginButton = '[data-test="login-button"]';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }

    async fillUsername(username: string) {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickLoginButton() {
        await this.page.locator(this.loginButton).click();
    }

    async login(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
}
