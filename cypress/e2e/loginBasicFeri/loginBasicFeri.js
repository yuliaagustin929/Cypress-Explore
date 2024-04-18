import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('Agent access agent tools home page',() => {
    cy.viewport('iphone-xr');
    cy.visit({url: 'https://orientasi.sit.bravo.bfi.co.id/',
      failOnStatusCode: false});
    cy.intercept('')
});

When('Agent click login button',() => {
    cy.get('#loginButton').click();
});

When('Agent input valid phone number',() => {
    cy.get('#mobile_phone').type('866433665526');
})

When('Agent click konfirmasi button',() => {
    cy.get('#sendLoginCodeButton').click();
})

When('Agent input OTP',() => {
    cy.get('#otp1').type('1');
    cy.get('#otp2').type('1');
    cy.get('#otp3').type('1');
    cy.get('#otp4').type('1');
})

When('Agent click konfirmasi OTP button', () => {
    cy.get('#verificationConfirmButton').click();
    cy.intercept('GET', '**/onboarding/v2/agent/profile').as('loungePage');
})

Then('Agent should be able to see lounge', () => {
    cy.wait('@loungePage')
    cy.get('[data-testid="notification"]').should('be.visible');
})