describe('Login Feature', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
    cy.visit({
      url: `${Cypress.env('agency-agenttools').baseUrl}`,
      failOnStatusCode: false
    });
  });

  it('[Login] Successfully logged in with active account', () => {
    cy.get('#loginButton').click();
    cy.get('[data-testid="mobile_phone"]').clear().type(Cypress.env('agency-agenttools').phoneActiveBravo);
    cy.get('#sendLoginCodeButton').click();
    cy.get('[data-testid="otp1"]').type(1);
    cy.get('[data-testid="otp2"]').type(1);
    cy.get('[data-testid="otp3"]').type(1);
    cy.get('[data-testid="otp4"]').type(1);
    cy.get('#verificationConfirmButton').click();
    cy.wait(1000);
    cy.get('[data-testid="goto-beranda"]').should('be.visible');
  });

  it('[Login] Successfully handles invalid credentials', () => {
    cy.get('#loginButton').click();
    cy.get('[data-testid="mobile_phone"]').clear().type(Cypress.env('agency-agenttools').phoneInactive);
    cy.get('#sendLoginCodeButton').click();
    cy.get('[data-testid="otp1"]').type(1);
    cy.get('[data-testid="otp2"]').type(1);
    cy.get('[data-testid="otp3"]').type(1);
    cy.get('[data-testid="otp4"]').type(1);
    cy.get('#verificationConfirmButton').click();

  });

  it('[Login] Successfully handles login with unregistered phone number', () => {
    cy.get('#loginButton').click();
    cy.get('[data-testid="mobile_phone"]').clear().type('8666634256');
    cy.get('#sendLoginCodeButton').click();
    cy.get('[data-testid="otp1"]').type(1);
    cy.get('[data-testid="otp2"]').type(1);
    cy.get('[data-testid="otp3"]').type(1);
    cy.get('[data-testid="otp4"]').type(1);
    cy.get('#verificationConfirmButton').click();

    cy.get('[data-testid="popup-modal-header-error"]').should('be.visible');
  });
});
