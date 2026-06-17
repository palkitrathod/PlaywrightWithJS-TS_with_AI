/**
 * Test data fixtures for various test scenarios
 */

export const loginTestData = {
    validLogin: {
        username: 'standard_user',
        password: 'tta_secret',
        expectedTitle: 'Products'
    },
    invalidLogin: {
        username: 'invalid_user',
        password: 'invalid_pass',
        expectedError: 'Username and password do not match any user in this service'
    },
    lockedUser: {
        username: 'locked_out_user',
        password: 'secret_sauce',
        expectedError: 'Sorry, this user has been locked out.'
    }
};

export const checkoutTestData = {
    standardCheckout: {
        firstName: 'Palkit',
        lastName: 'Rathod',
        postalCode: '123456'
    },
    alternateCheckout: {
        firstName: 'John',
        lastName: 'Doe',
        postalCode: '654321'
    }
};

export const productTestData = {
    tshirtProduct: {
        selector: '[data-test="add-to-cart-test-allthethings-tshirt-red"]',
        name: 'Test All The Things T-Shirt (Red)'
    },
    bikeLightProduct: {
        selector: '[data-test="add-to-cart-tta-bike-light"]',
        name: 'Tta Bike Light'
    }
};

export const errorMessages = {
    loginError: 'epic sadface: Username and password do not match any user in this service',
    requiredField: 'Error: First Name is required',
    invalidPostalCode: 'Error: Postal Code format is invalid'
};
