import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given ('Agent access link web Agent Tools', () =>{
    cy.viewport('iphone-xr');
    cy.visit ({
        url: 'https://orientasi.sit.bravo.bfi.co.id/', 
        failOnStatusCode: false
    });
});

When ('Agent click login button', () =>{
    cy.get('#loginButton').click();
});

When ('Agent input {string} phone number', (phoneNumber) => {
    cy.get('[data-testid="mobile_phone"]').clear().type(phoneNumber);
});

When ('Agent click button konfirmasi', () => {
    cy.get('#sendLoginCodeButton').click();
});

When ('Agent input OTP', () => {
    cy.get('#otp1').type('1');
    cy.get('#otp2').type('1');
    cy.get('#otp3').type('1');
    cy.get('#otp4').type('1');
}); 

When ('Agent click konfirmasi button', () => {
    cy.get('#verificationConfirmButton').click();
});

Then ('Agent should be able to see lounge page', () => {
    cy.wait (1000);
    cy.get('[data-testid="footer-toolbar-menu"]').should('be.enabled');
});