import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given ('Agent access web Agent Tools', () =>{
    cy.viewport('iphone-xr');
    cy.visit ({
        url: 'https://orientasi.sit.bravo.bfi.co.id/', 
        failOnStatusCode: false
    });
});

When ('Agent login with valid phone number', () =>{
    cy.get('#loginButton').click();
    cy.get('[data-testid="mobile_phone"]').clear().type('866433665526');
    cy.get('#sendLoginCodeButton').click();
    cy.get('#otp1').type('1');
    cy.get('#otp2').type('1');
    cy.get('#otp3').type('1');
    cy.get('#otp4').type('1');
    cy.get('#verificationConfirmButton').click();
    cy.wait (1000);
    cy.get('[data-testid="footer-toolbar-menu"]').should('be.visible');
});

When ('Agent click akun button', () =>{
    cy.get('[data-testid="footer-Akun"]').click();
});

When ('Agent click informasi NPWP button', () => {
    cy.get('#goToNPWPInformationButton').click();
});

When ('Agent click ubah button', () => {
    cy.contains('Ubah').click();
});

When ('Agent input {string} npwp', (npwp) => {
    if (npwp === '') {
        cy.get('[data-testid="no_npwp"]').type(0).clear();
    } 
    else {
        cy.get('[data-testid="no_npwp"]').clear().type(npwp);
    }
});

Then ('Agent can see {string} must input valid npwp', (message) => {
    cy.get('[data-testid="form-error-no_npwp"]').should('have.text', message);
});

Then ('Agent success save npwp', () => {
    cy.contains('Verifikasi').click();
    cy.contains('Nama Pemilik').should('be.visible');
    cy.contains('Simpan').click();
    cy.contains('info NPWP').should('be.visible');
});