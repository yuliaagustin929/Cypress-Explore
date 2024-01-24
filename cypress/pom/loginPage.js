/* Login Page */

export default class LoginPage {
    static loginButton() {
      return cy.get('#loginButton', { timeout: 17000 });
    }
    static phoneNumberField() {
      return cy.get('[data-testid="mobile_phone"]');
    }
    static sendVerifiCodeButton() {
      return cy.get('#sendLoginCodeButton');
    }
    static inputOtp1() {
      return cy.get('[data-testid="otp1"]');
    }
    static inputOtp2() {
      return cy.get('[data-testid="otp2"]');
    }
    static inputOtp3() {
      return cy.get('[data-testid="otp3"]');
    }
    static inputOtp4() {
      return cy.get('[data-testid="otp4"]');
    }
    static sendVerifiConfirmButton() {
      return cy.get('#verificationConfirmButton');
    }
    static popUpUnregisteredTitle() {
      return cy.get('[data-testid="popup-modal-header-error"]');
    }
    static popUpUnregisteredBody() {
      return cy.get('[data-testid="popup-message"]');
    }
    static popUpUnregisteredDaftarkanButton() {
      return cy.get('[data-testid="popup-modal-custom-button"]').find('button');
    }
    static popUpUnregisteredCloseButton() {
      return cy.get('[data-testid="close-button"]');
    }
    static errorMessage() {
      return cy.get('[data-testid="form-error-mobile_phone"]');
    }
  }
  