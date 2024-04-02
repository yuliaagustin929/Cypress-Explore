export function loginAgentUI(phone) {
    cy.get('#loginButton').click();
    cy.get('[data-testid="mobile_phone"]').clear().type(phone);
    cy.get('#sendLoginCodeButton').click();
    cy.get('[data-testid="otp1"]').type(1);
    cy.get('[data-testid="otp2"]').type(1);
    cy.get('[data-testid="otp3"]').type(1);
    cy.get('[data-testid="otp4"]').type(1);
    cy.get('#verificationConfirmButton').click();
  }
  
    