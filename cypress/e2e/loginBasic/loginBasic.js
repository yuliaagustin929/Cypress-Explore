import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pom/loginPage.js"
import LoungePage from "../../pom/lounge/loungePage.js";

Given('Agent access agent tools home page', () => {
    cy.viewport('iphone-xr'); 
    cy.visit({
        url: 'https://orientasi.sit.bravo.bfi.co.id/', 
        failOnStatusCode: false
    });
});


When('Agent click login button', () => {
    loginPage.loginButton().click();
});

When('Agent click konfirmasi button', () => {
    loginPage.sendVerifiCodeButton().click()
})

When('Agent input {string} phone number', (phoneNumber) => {
    loginPage.phoneNumberField().clear().type(phoneNumber);
})

When('Agent input OTP', () => {
    loginPage.inputOtp1().type('1');
    loginPage.inputOtp2().type('1');
    loginPage.inputOtp3().type('1');
    loginPage.inputOtp4().type('1');
})


When('Agent click konfirmasi button Otp', () => {
    loginPage.sendVerifiConfirmButton().click();
})

