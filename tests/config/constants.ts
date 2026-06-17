// Application URLs
export const APP_URL = 'https://app.thetestingacademy.com/playwright/ttacart/';

// Test credentials
export const VALID_CREDENTIALS = {
    username: 'standard_user',
    password: 'tta_secret'
};

export const INVALID_CREDENTIALS = {
    username: 'abvdsf',
    password: 'asdfsadf'
};

// Test data for checkout
export const CHECKOUT_DATA = {
    firstName: 'Palkit',
    lastName: 'Rathod',
    postalCode: '123456'
};

// Test timeouts (in milliseconds)
export const TIMEOUTS = {
    SHORT: 3000,
    MEDIUM: 5000,
    LONG: 10000
};

// Retry configuration
export const RETRY_CONFIG = {
    retries: 2,
    timeout: 30000
};
