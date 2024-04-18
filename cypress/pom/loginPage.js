/* Login Page */

export default class LoginPage {
    static loginButton() {
      return cy.get('#loginButton').click();
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
    static errorMessage() {
      return cy.get('[data-testid="form-error-mobile_phone"]');
    }
    static loungeBar() {
      return  cy.get('[data-testid="footer-toolbar-menu"]');
    }
  }
  