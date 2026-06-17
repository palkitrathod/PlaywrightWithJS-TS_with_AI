import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { CompletePage } from '../pages/CompletePage';

/**
 * Custom fixture that provides all page objects
 * Usage: test('name', async ({ pageObjects, page }) => { ... })
 */
type PageObjects = {
    loginPage: LoginPage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    overviewPage: OverviewPage;
    completePage: CompletePage;
};

export const test = base.extend<{ pageObjects: PageObjects }>({
    pageObjects: async ({ page }, use) => {
        // Initialize all page objects
        const pageObjects: PageObjects = {
            loginPage: new LoginPage(page),
            productsPage: new ProductsPage(page),
            cartPage: new CartPage(page),
            checkoutPage: new CheckoutPage(page),
            overviewPage: new OverviewPage(page),
            completePage: new CompletePage(page),
        };

        // Pass to test
        await use(pageObjects);

        // Cleanup (if needed)
        // await page.close();
    },
});

export { expect } from '@playwright/test';
