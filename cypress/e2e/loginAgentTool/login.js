/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pom/loginPage'; 
import LoungePage  from '../../pom/lounge';
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
  loginPage.loginButton().click();
  if (phoneNumber === 'active') {
    loginPage.phoneNumberField().clear().type('866433277757');
  } 
  loginPage.sendVerifiCodeButton().click();
  loginPage.inputOtp1().type(1);
  loginPage.inputOtp2().type(1);
  loginPage.inputOtp3().type(1);
  loginPage.inputOtp4().type(1);
  loginPage.sendVerifiConfirmButton().click();
  cy.intercept('GET', '**/onboarding/v2/agent/profile').as('loungePage');
});

When(`Agent login with {string} phone number`, (phoneNumber) => {
  cy.wait('@homePage');
  loginPage.loginButton().click();
    if (phoneNumber === '') {
      loginPage.phoneNumberField().type(0).clear();
    } else {
      loginPage.phoneNumberField().type(phoneNumber);
    }
});

Then(`Agent should be able to see lounge page`, () => {
  cy.wait('@loungePage');
  cy.url().should('eq', `https://orientasi.sit.bravo.bfi.co.id/lounge`);
});

Then(`Agent can see {string} must input valid phone number`, (message) => {
  loginPage.errorMessage().should('have.text', message);
  loginPage.sendVerifiCodeButton().should('be.disabled');
});

When(`Agent login as {string} Agent`, (agentType) => {
    cy.wait('@homePage');
    cy.intercept('GET', '**/onboarding/v2/agent/profile').as('loungePage');
    loginAgentUI(Cypress.env('agency-agenttools')[agentType].phone);
    cy.wait('@loungePage');
  });


