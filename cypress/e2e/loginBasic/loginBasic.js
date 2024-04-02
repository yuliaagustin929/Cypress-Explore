import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('Agent access Agent tools home page', () => {
    cy.viewport('iphone-xr');
    cy.visit({
      url: Cypress.env('agency-agenttools').baseUrl,
      failOnStatusCode: false
    });
  });
  
  When('Agent click login button', () => {
    cy.get('#loginButton').click();
  });
  
  When('Agent input valid active phone number', () => {
    cy.get('[data-testid="mobile_phone"]').clear().type(Cypress.env('agency-agenttools').phoneActiveBravo);
  });
  
  When('Agent click Konfirmasi button', () => {
    cy.get('#sendLoginCodeButton').click();
  });
  
  When('Agent input OTP', () => {
    cy.get('[data-testid="otp1"]').type(1);
    cy.get('[data-testid="otp2"]').type(1);
    cy.get('[data-testid="otp3"]').type(1);
    cy.get('[data-testid="otp4"]').type(1);
  });
  
  When('Agent click konfirmasi button', () => {
    cy.get('#verificationConfirmButton').click();
  });
  
  Then('Agent should be able to see lounge', () => {
    cy.wait(1000);
    cy.get('[data-testid="goto-beranda"]').should('be.visible');
  });