import { Page } from '@playwright/test';

export class ProductsPage {
    private page: Page;
    private pageTitle = '[data-test="title"]';
    private addToCartTshirt = '[data-test="add-to-cart-test-allthethings-tshirt-red"]';
    private addToCartBikeLight = '[data-test="add-to-cart-tta-bike-light"]';
    private shoppingCartLink = '[data-test="shopping-cart-link"]';

    constructor(page: Page) {
        this.page = page;
    }

    async verifyPageTitle() {
        await this.page.locator(this.pageTitle).isVisible();
    }

    async addTshirtToCart() {
        await this.page.locator(this.addToCartTshirt).click();
    }

    async addBikeLightToCart() {
        await this.page.locator(this.addToCartBikeLight).click();
    }

    async clickShoppingCart() {
        await this.page.locator(this.shoppingCartLink).click();
    }

    async addMultipleItemsAndGoToCart() {
        await this.addTshirtToCart();
        await this.addBikeLightToCart();
        await this.clickShoppingCart();
    }
}
