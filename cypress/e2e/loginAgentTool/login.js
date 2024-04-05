/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { loginAgentUI } from '../commonAction';

Given(`Agent access agent tool {string} page`, (pageName) => {
  cy.viewport('iphone-xr');
  cy.intercept({
    method: 'GET',
    url: 'https://orientasi.sit.bravo.bfi.co.id/assets/locales/en/translation.json*'
  }).as('homePage');
  if (pageName == 'home') {
    cy.visit({
      url: "https://orientasi.sit.bravo.bfi.co.id",
      failOnStatusCode: false
    });
  } else {
    cy.visit({
      url: `https://orientasi.sit.bravo.bfi.co.id/${pageName}`,
      failOnStatusCode: false
    });
  }
});

When(`Agent login with {string} credentials`, (phoneNumber) => {
  cy.wait('@homePage');
  cy.get('#loginButton', { timeout: 17000 }).click();
  cy.get('[data-testid="mobile_phone"]').clear().type(phoneNumber);
  cy.get('#sendLoginCodeButton').click();
  cy.get('[data-testid="otp1"]').type(1);
  cy.get('[data-testid="otp2"]').type(1);
  cy.get('[data-testid="otp3"]').type(1);
  cy.get('[data-testid="otp4"]').type(1);
  cy.get('#verificationConfirmButton').click();
  cy.intercept('GET', '**/onboarding/v2/agent/profile').as('loungePage');
});

When(`Agent login with {string} phone number`, (phoneNumber) => {
  cy.wait('@homePage');
  cy.get('#loginButton', { timeout: 17000 }).click();
    if (phoneNumber === '') {
      cy.get('[data-testid="mobile_phone"]').type(0).clear();
    } else {
      cy.get('[data-testid="mobile_phone"]').type(phoneNumber);
    }
});

Then(`Agent should be able to see lounge page`, () => {
  cy.wait('@loungePage');
  cy.url().should('eq', `https://orientasi.sit.bravo.bfi.co.id/lounge`);
});

Then(`Agent can see {string} must input valid phone number`, (message) => {
  cy.get('[data-testid="form-error-mobile_phone"]').should('have.text', message);
  cy.get('#sendLoginCodeButton').should('be.disabled');
});

When(`Agent login as {string} Agent`, (phoneNumber) => {
    cy.wait('@homePage');
    cy.intercept('GET', '**/onboarding/v2/agent/profile').as('loungePage');
    loginAgentUI(phoneNumber);
    cy.wait('@loungePage');
  });


  When(`Agent Click Account Akun`, () => {
    //cy.wait('@homePage');
    cy.get('[data-testid="goto-akun"]').click();
   
  });
  When(`Agent Click Informasi npwp`, () => {
    //cy.wait('@homePage');
    cy.get('#goToNPWPInformationButton').click()
   
  });

  When(`Agent Click ubah npwp`, () => {
    //cy.wait('@homePage');
    cy.get('[class="bravo-wrapper-863 bravo-wrapper-d11-1376"]').click();
   
  });

  When(`Agent input with {string} npwp number`, (npwpNumber) => {
    cy.wait('@homePage');
    cy.get('[data-testid="mobile_phone"]').type(npwpNumber);
        
      
  });

  Then(`Agent can see {string} must input valid npwp number`, (message) => {
    cy.get('data-testid="form-error-no_npwp').should('have.text', message);
    
  });





