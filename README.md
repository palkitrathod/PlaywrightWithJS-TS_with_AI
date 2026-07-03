# Playwright with JavaScript/TypeScript & AI

A comprehensive learning repository combining **JavaScript/TypeScript fundamentals** with **Playwright end-to-end testing**. This project demonstrates practical examples of core programming concepts and automated browser testing using Playwright.

## 📋 Project Overview

This repository serves as a learning resource that includes:
- **Core JavaScript Concepts**: Arrays, Objects, Functions, Async/Await, Promises, Callbacks, Control Flow
- **Object-Oriented Programming**: Encapsulation, Inheritance, Polymorphism, Classes & Objects
- **TypeScript Fundamentals**: Interfaces, Abstraction, type-safe programming examples
- **Playwright E2E Testing**: Login validation, cart/checkout flows, Page Object Model (POM), fixtures, and codegen
- **CI/CD**: GitHub Actions workflow for automated Playwright test runs
- **Best Practices**: Code organization, test structure, and automation patterns

---

## 📁 Project Structure

```
PlaywrightJSTS_AI/
├── .github/workflows/              # CI/CD
│   └── playwright.yml             # GitHub Actions workflow for Playwright tests
│
├── tests/                          # Playwright test specifications
│   ├── play.spec.ts               # Login functionality tests (TypeScript)
│   ├── codegen_pom.spec.ts        # End-to-end cart/checkout tests using POM
│   ├── codegen_validation.spec.ts # Generated test validations
│   ├── codegen1.spec.ts           # Additional codegen tests
│   ├── Export_Import.spec.ts      # Module export/import examples in tests
│   ├── example.spec.js            # Example test cases
│   ├── test.spec.js               # General test cases
│   ├── pages/                     # Page Object Model classes
│   │   ├── LoginPage.ts, ProductsPage.ts, CartPage.ts
│   │   ├── CheckoutPage.ts, OverviewPage.ts, CompletePage.ts
│   ├── fixtures/                  # Custom fixtures & test data
│   │   ├── pageObjects.ts, setupTeardown.ts, testData.ts
│   ├── config/                    # Test configuration
│   │   └── constants.ts
│   ├── utils/                     # Helper utilities
│   │   └── helpers.ts
│   └── README.md                  # Test suite documentation
│
├── Interface/                      # TypeScript interface examples
│   ├── inf1.ts, inf2.ts
│   ├── interface_class.ts         # Interfaces with classes
│   ├── interface_object.ts        # Interfaces with objects
│   ├── interface_variable.ts      # Interfaces with variables
│   ├── interface_optional.ts      # Optional properties
│   ├── Interface_properties.ts, interface_properties2-4.ts
│   ├── Browsers.ts, Payment.ts    # Real-world interface examples
│
├── TypeScript/                     # TypeScript fundamentals
│   ├── hello_world.ts
│   ├── ts1.ts, ts2.ts, ts3.ts
│   ├── interface1.ts, interface2.ts
│   ├── abs.ts, abstraction.ts     # Abstraction examples
│
├── OOPS Basics/                    # Object-Oriented Programming
│   ├── classobject.js             # Classes and objects
│   ├── Encapsulation/             # enc1.js through enc6.js
│   ├── Inheritance/               # inh1.js through inh6.js
│   ├── Polymorphism/              # method_overriding.js
│   └── readme.md
│
├── Arrays/                         # JavaScript Array concepts
│   ├── array1.js, arrray2.js, array3.js
│   ├── array_checking
│   ├── array_slice.js
│   ├── array_splice.js
│   ├── array_spread.js
│   └── anagram.js
│
├── Async and Await/               # Async/Await patterns
│   ├── aa1.js, aa2.js, aa3.js, aa4.js
│
├── Async_Await/                   # Additional async/await examples
│   └── aa1.js
│
├── Callbacks/                      # Callback function examples
│   ├── cb1.js, cb2.js, cb3.js
│
├── Functions/                      # Function concepts
│   ├── arrow_function.js
│   ├── arroe_func_real.js
│   ├── function_expression.js
│   ├── fun_with_param_returns.js
│   ├── default_parameter.js
│   ├── rest_parameter.js
│   ├── IIFE.js
│   ├── scope_function.js
│   └── template_literals.js
│
├── Objects/                        # Object concepts
│   ├── obj1.js, obj2.js
│   ├── obj_creation.js
│   ├── obj_example.js
│   ├── obj_function.js
│   ├── obj_get_set_method.js
│   ├── obj_premetive_ref.js
│   └── obj_real.js
│
├── Promise/                        # Promise concepts
│   ├── promise1.js, promise2.js, promise3.js
│   ├── promise_all.js
│   ├── promise_finally.js
│   ├── promise_Real_api.js
│   ├── IQ1.js, IQ2.js             # Interview questions
│   └── promise.md
│
├── Statement_Examples/             # Control flow statements
│   ├── IE1.js through IE11.js      # If-Else examples
│   └── IR7.js                      # Loop examples
│
├── Do_While_Examples/              # Do-While loop patterns
│   ├── DW1.js through DW5.js
│   ├── FizzBuzz.js
│   └── Traiangle_Classifier.js
│
├── Multi_Dimenstion_Array/        # Multi-dimensional arrays
│   ├── 2d_array.js
│   ├── array_2d_functions.js
│   ├── Piramid.js
│   ├── real_example.js
│   └── right_piramid_patter.js
│
├── WeeklyTests/                    # Weekly practice exercises
│   ├── code1.js, code2.js
│
├── Javascript_basics/              # Basic JavaScript concepts
│   ├── first.js
│   └── Operators.js
│
├── chapter_01_basics/              # Fundamentals
│   └── basics.js
│
├── Playwright_Basic/              # Playwright configuration examples
│   ├── package.json
│   └── package-lock.json
│
├── playwright.config.js            # Playwright configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/palkitrathod/PlaywrightWithJS-TS_with_AI.git
   cd PlaywrightWithJS-TS_with_AI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This installs:
   - `@playwright/test` - Playwright testing framework
   - `@types/node` - TypeScript definitions for Node.js
   - `codegen` - Code generation utilities

---

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/play.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run with debug mode (step through tests)
```bash
npx playwright test --debug
```

### Run with UI mode (interactive test runner)
```bash
npx playwright test --ui
```

### Generate test code from user interactions
```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/ttacart
```

### View HTML test report
```bash
npx playwright show-report
```

---

## 📝 Example Tests

### Test: Login with Valid Credentials
Located in [tests/play.spec.ts](tests/play.spec.ts)

```typescript
test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    
    // Verify successful login
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});
```

### Test: Error Handling with Invalid Credentials
```typescript
test('should display error message with invalid credentials', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    
    await page.locator('[data-test="username"]').fill('abvdsf');
    await page.locator('[data-test="password"]').fill('asdfsadf');
    await page.locator('[data-test="login-button"]').click();
    
    // Verify error message is displayed
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});
```

---

## 📚 JavaScript/TypeScript Concepts Covered

### 1. **Arrays**
- Array creation and manipulation
- Array methods (slice, splice, spread)
- 2D arrays and matrix operations
- Common algorithms (anagram, pyramid patterns)

### 2. **Objects**
- Object creation and property access
- Methods and getters/setters
- Primitive vs reference types
- Real-world object examples

### 3. **Functions**
- Function declarations and expressions
- Arrow functions
- Default parameters
- Rest parameters
- IIFE (Immediately Invoked Function Expressions)
- Function scope and closures
- Template literals

### 4. **Asynchronous Programming**
- **Callbacks**: Traditional async pattern
- **Promises**: Promise creation and chain
- **Async/Await**: Modern async syntax
- **Promise.all()**: Handling multiple promises
- **Promise.finally()**: Cleanup operations
- Real API calls with promises

### 5. **Control Flow**
- If-Else statements
- Switch statements (in Statement_Examples)
- Do-While loops
- Problem-solving: FizzBuzz, Triangle Classifier

### 6. **Object-Oriented Programming (OOPS Basics)**
- Classes and objects
- Encapsulation (private fields, getters/setters)
- Inheritance (extends, super)
- Polymorphism (method overriding)

### 7. **TypeScript & Interfaces**
- TypeScript basics and type annotations
- Interfaces with variables, objects, and classes
- Optional and readonly properties
- Abstraction with abstract classes
- Real-world interface examples (Browsers, Payment)

### 8. **Playwright Testing**
- Browser automation
- Element location strategies (data-test attributes)
- User interactions (click, fill, type)
- Assertions and expectations
- **Page Object Model (POM)** — page classes for Login, Products, Cart, Checkout, Overview, Complete
- **Custom fixtures** — page object injection, setup/teardown, test data
- Test organization and best practices

---

## ⚙️ Configuration

### Playwright Config (`playwright.config.js`)
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Reporters**: HTML report generation
- **Trace**: Recorded on first retry for debugging
- **Browsers**: Chromium, Firefox, WebKit (Desktop)
- **Retries**: 2 on CI, 0 locally

### Key Settings
- `fullyParallel: true` - Tests run in parallel
- `forbidOnly: true` on CI - Prevents accidental `.only` in production
- `trace: 'on-first-retry'` - Records video of failed tests
- `reporter: 'html'` - Generates beautiful HTML reports

### CI/CD (GitHub Actions)
Playwright tests run automatically via the workflow in `.github/workflows/playwright.yml` on pushes and pull requests. The HTML report is uploaded as a build artifact.

---

## 🔧 Running Individual JavaScript Files

To run individual JavaScript concept files:

```bash
node Arrays/array1.js
node Functions/arrow_function.js
node Promise/promise1.js
node Async\ and\ Await/aa1.js
node Do_While_Examples/FizzBuzz.js
```

---

## 📊 Test Results

After running tests, view the HTML report:
```bash
npx playwright show-report
```

Results are stored in:
- `playwright-report/` - Detailed HTML test reports
- `test-results/` - Raw test result files

---

## 🎯 Learning Path

**Recommended order to explore this repository:**

1. **Start with Basics** → `Javascript_basics/`, `chapter_01_basics/`
2. **Learn Functions** → `Functions/` folder
3. **Explore Data Structures** → `Arrays/`, `Objects/`, `Multi_Dimenstion_Array/`
4. **Control Flow** → `Statement_Examples/`, `Do_While_Examples/`
5. **Async Patterns** → `Callbacks/` → `Promise/` → `Async and Await/`
6. **Object-Oriented Programming** → `OOPS Basics/` (Encapsulation → Inheritance → Polymorphism)
7. **TypeScript** → `TypeScript/` → `Interface/`
8. **Testing** → `tests/` folder with Playwright examples and Page Object Model
9. **Practice** → `WeeklyTests/` exercises

---

## 🔗 Resources

- [Playwright Documentation](https://playwright.dev)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [The Testing Academy](https://app.thetestingacademy.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 📦 Dependencies

```json
{
  "devDependencies": {
    "@playwright/test": "^1.59.1",
    "@types/node": "^25.6.0"
  },
  "dependencies": {
    "codegen": "^0.1.0"
  }
}
```

---

## ✅ What You'll Learn

✓ Core JavaScript/TypeScript programming concepts  
✓ Object-oriented programming (encapsulation, inheritance, polymorphism)  
✓ TypeScript interfaces and abstraction  
✓ Asynchronous programming patterns  
✓ End-to-end test automation with Playwright  
✓ Page Object Model and custom fixtures  
✓ CI/CD with GitHub Actions  
✓ Best practices for test organization  
✓ HTML report generation and test analytics  
✓ Real-world application testing scenarios  
✓ Debugging and troubleshooting failed tests  

---

## 🤝 Contributing

Feel free to add more examples, improve documentation, or submit issues and pull requests.

---

## 📄 License

ISC

---

## 👤 Author

**Palkitrathod**
- GitHub: [@palkitrathod](https://github.com/palkitrathod)
- Repository: [PlaywrightWithJS-TS_with_AI](https://github.com/palkitrathod/PlaywrightWithJS-TS_with_AI)

---

## 🔔 Notes

- All tests target the Testing Academy's demo application: `https://app.thetestingacademy.com/playwright/ttacart/`
- Valid test credentials are provided in the test files
- Use Playwright's code generator to quickly create test scripts from browser interactions
- Tests can be run locally or in CI/CD pipelines

---

**Last Updated**: July 2026  
**Status**: Active Development
