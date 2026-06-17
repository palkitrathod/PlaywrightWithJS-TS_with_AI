# Playwright POM (Page Object Model) Test Structure

This folder contains the complete Page Object Model implementation for Playwright tests.

## 📁 Folder Structure

```
tests/
├── pages/                      # Page Object classes
│   ├── LoginPage.ts           # Login functionality
│   ├── ProductsPage.ts        # Products page interactions
│   ├── CartPage.ts            # Shopping cart page
│   ├── CheckoutPage.ts        # Checkout form
│   ├── OverviewPage.ts        # Order overview
│   └── CompletePage.ts        # Order completion
│
├── utils/                      # Utility functions and helpers
│   ├── helpers.ts             # Reusable helper functions
│   └── logger.ts              # Logging utilities (optional)
│
├── fixtures/                   # Test data and custom fixtures
│   ├── pageObjects.ts         # Custom Playwright fixtures
│   ├── testData.ts            # Test data fixtures
│   └── setupTeardown.ts       # Setup/teardown configurations
│
├── config/                     # Configuration files
│   ├── constants.ts           # Application constants and URLs
│   └── environment.ts         # Environment-specific configs
│
├── codegen_pom.spec.ts        # Example test using POM
├── play.spec.ts               # Login tests
├── example.spec.js            # Example test cases
└── test.spec.js               # General tests
```

## 🏗️ POM Architecture

### 1. **Pages** - Page Object Classes
Each page object represents a page or component in your application:
- Encapsulates all locators (selectors)
- Contains methods for user interactions
- Provides reusable actions for that page

**Example:**
```typescript
const loginPage = new LoginPage(page);
await loginPage.login('username', 'password');
```

### 2. **Utils** - Helper Functions
Reusable utility functions for common operations:
- Element waits and checks
- Screenshots and logging
- DOM manipulation helpers
- Navigation helpers

**Example:**
```typescript
await waitForElement(page, '[data-test="title"]');
await takeScreenshot(page, 'login-success');
```

### 3. **Fixtures** - Test Data & Custom Fixtures
- **pageObjects.ts**: Provides all page objects to tests
- **testData.ts**: Centralized test data (credentials, expected values)
- **setupTeardown.ts**: Shared setup and cleanup logic

**Example:**
```typescript
import { test, expect } from '../fixtures/pageObjects';
test('login', async ({ pageObjects, page }) => {
    await pageObjects.loginPage.login('user', 'pass');
});
```

### 4. **Config** - Constants & Configuration
Centralized configuration and constants:
- Application URLs
- Test timeouts
- Credentials
- Environment variables

**Example:**
```typescript
import { APP_URL, VALID_CREDENTIALS } from '../config/constants';
```

## ✨ Benefits of this Structure

✅ **Maintainability** - Easy to update locators in one place  
✅ **Reusability** - Share page objects and helpers across tests  
✅ **Scalability** - Simple to add new pages and tests  
✅ **Readability** - Tests read like business scenarios  
✅ **Data Management** - Test data separated from test logic  
✅ **DRY Principle** - No code duplication  

## 🚀 Using the POM

### Basic Test Example
```typescript
import { test, expect } from '../fixtures/pageObjects';
import { VALID_CREDENTIALS } from '../config/constants';

test('Complete checkout flow', async ({ pageObjects, page }) => {
    // Login
    await pageObjects.loginPage.goto();
    await pageObjects.loginPage.login(
        VALID_CREDENTIALS.username,
        VALID_CREDENTIALS.password
    );

    // Add to cart
    await pageObjects.productsPage.addMultipleItemsAndGoToCart();

    // Checkout
    await pageObjects.checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    
    // Verify completion
    await pageObjects.completePage.verifyOrderComplete();
});
```

### Using Helper Functions
```typescript
import { isElementVisible, takeScreenshot } from '../utils/helpers';
import { TIMEOUTS } from '../config/constants';

test('verify visibility', async ({ page }) => {
    const isVisible = await isElementVisible(page, '[data-test="title"]');
    expect(isVisible).toBeTruthy();
    
    await takeScreenshot(page, 'page-loaded');
});
```

### Using Test Data
```typescript
import { loginTestData, checkoutTestData } from '../fixtures/testData';

test('login scenarios', async ({ pageObjects }) => {
    const { validLogin } = loginTestData;
    
    await pageObjects.loginPage.login(
        validLogin.username,
        validLogin.password
    );
    
    expect(validLogin.expectedTitle).toBeDefined();
});
```

## 📝 Adding New Page Objects

1. Create a new file in `pages/` folder
2. Define page locators as private properties
3. Create methods for user interactions
4. Export the class

**Template:**
```typescript
import { Page } from '@playwright/test';

export class MyPage {
    private page: Page;
    private selector1 = '[data-test="element1"]';
    private selector2 = '[data-test="element2"]';

    constructor(page: Page) {
        this.page = page;
    }

    async myMethod() {
        await this.page.locator(this.selector1).click();
    }
}
```

## 🔧 Extending Fixtures

To add more fixtures, update `fixtures/pageObjects.ts`:

```typescript
export const test = base.extend<{ 
    pageObjects: PageObjects;
    customData: any;  // Add your new fixture
}>({
    customData: async ({}, use) => {
        await use(yourData);
    },
});
```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev)
- [Page Object Model Best Practices](https://playwright.dev/docs/pom)
- [Playwright Fixtures](https://playwright.dev/docs/test-fixtures)

## ✅ Testing Checklist

- [ ] All page objects created
- [ ] All helpers implemented
- [ ] Test data centralized
- [ ] No hard-coded selectors in tests
- [ ] All tests use page objects
- [ ] Screenshots for debugging
- [ ] Error messages properly handled

---

**Last Updated**: June 2026
