import { test, expect } from './fixtures/pageObjects';
import { VALID_CREDENTIALS, CHECKOUT_DATA, APP_URL } from './config/constants';

test('Complete checkout flow with valid credentials', async ({ pageObjects }) => {
  // Step 1: Login
  await pageObjects.loginPage.goto();
  await pageObjects.loginPage.login(
    VALID_CREDENTIALS.username,
    VALID_CREDENTIALS.password
  );

  // Step 2: Add items to cart and navigate to cart
  await pageObjects.productsPage.addMultipleItemsAndGoToCart();

  // Step 3: Verify cart page and proceed to checkout
  await pageObjects.cartPage.verifyCartPageVisible();
  await pageObjects.cartPage.clickCheckout();

  // Step 4: Fill checkout information
  await pageObjects.checkoutPage.verifyCheckoutPageVisible();
  await pageObjects.checkoutPage.fillCheckoutInfo(
    CHECKOUT_DATA.firstName,
    CHECKOUT_DATA.lastName,
    CHECKOUT_DATA.postalCode
  );

  // Step 5: Verify overview and finish order
  await pageObjects.overviewPage.verifyOverviewPageVisible();
  await pageObjects.overviewPage.clickFinish();

  // Step 6: Verify order completion
  await pageObjects.completePage.verifyOrderComplete();
});