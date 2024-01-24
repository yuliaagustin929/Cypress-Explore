/// <reference types="Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pom/loginPage'; 
// import { loginAgentUI } from '@e2e/agency-agenttool/commonAction';

Given(`Agent access agent tool {string} page`, (pageName) => {
  cy.viewport('iphone-xr');
  cy.intercept({
    method: 'GET',
    url: 'https://orientasi.sit.bravo.bfi.co.id/assets/locales/en/translation.json*'
  }).as('homePage');
  if (pageName == 'home') {
    cy.visit({
      url: `${Cypress.env('agency-agenttools').baseUrl}`,
      failOnStatusCode: false
    });
  } else {
    cy.visit({
      url: `${Cypress.env('agency-agenttools').baseUrl}/${pageName}`,
      failOnStatusCode: false
    });
  }
});

When(`Agent login with {string} credentials`, (phoneNumber) => {
  cy.wait('@homePage');
  loginPage.loginButton().click();
  if (phoneNumber === 'active') {
    loginPage.phoneNumberField().clear().type(Cypress.env('agency-agenttools').phoneActiveBravo);
  } else if (phoneNumber === 'inactive') {
    loginPage.phoneNumberField().clear().type(Cypress.env('agency-agenttools').phoneInactive);
  } else if (phoneNumber === 'unregistered') {
    loginPage
      .phoneNumberField()
      .clear()
      .type('8305' + Math.floor(Math.random() * 10000000));
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
  if (phoneNumber === 'empty') {
    loginPage.phoneNumberField().type('0').clear();
  } else if (phoneNumber === 'moreThanMaxDigit') {
    loginPage.phoneNumberField().clear().type('89854656576876');
  } else if (phoneNumber === 'lessThanMinDigit') {
    loginPage.phoneNumberField().clear().type('89656');
  } else if (phoneNumber === 'invalidFormat') {
    loginPage.phoneNumberField().clear().type('79656764567');
  }
});

When(`Agent login as {string} Agent`, (agentType) => {
  cy.wait('@homePage');
  cy.intercept('GET', '**/onboarding/v2/agent/profile').as('loungePage');
  loginAgentUI(Cypress.env('agency-agenttools')[agentType].phone);
  cy.wait('@loungePage');
});

Then(`Agent should be able to see lounge page`, () => {
  cy.wait('@loungePage');
  cy.url().should('eq', `${Cypress.env('agency-agenttools').baseUrl}/lounge`);
});

Then(`Agent can see reactivasi account page`, () => {
  cy.url().should('eq', `${Cypress.env('agency-agenttools').baseUrl}/reaktivasi?source=login`);
});

Then(`Agent can see pop up message for unregistered agent`, () => {
  loginPage.popUpUnregisteredTitle().should('have.text', 'Akun anda belum terdaftar');
  loginPage.popUpUnregisteredBody().should('have.text', 'Apakah anda ingin mendaftarkan akun anda?');
  loginPage.popUpUnregisteredDaftarkanButton().should('be.visible');
  loginPage.popUpUnregisteredCloseButton().should('be.visible');
});

Then(`Agent can see message must fill phone number`, () => {
  loginPage.errorMessage().should('have.text', 'Masukkan Nomor Telepon');
  loginPage.sendVerifiCodeButton().should('be.disabled');
});

Then(`Agent can see {string} must input valid phone number`, (message) => {
  loginPage.errorMessage().should('have.text', message);
  loginPage.sendVerifiCodeButton().should('be.disabled');
});
