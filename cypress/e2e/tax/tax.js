import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('Agent access account page', () => {
    cy.get('[data-testid="goto-akun"]').click();
});

When('Agent click Informsi NPWP menu', () => {
    cy.get('[data-testid="goToNPWPInformationButton"]').click();
});

When('Agent click Ubah button', () => {
    cy.contains('Ubah').click();
})

Then('Agent input {string} number and validate error {string}', (npwpNo, message) => {
    if (npwpNo === '') {
        cy.get('[data-testid="no_npwp"]').clear();
        cy.get('[data-testid="form-error-no_npwp"]').should('have.text', message);
    } else {
        cy.get('[data-testid="no_npwp"]').clear().type(npwpNo);
        cy.get('[data-testid="form-error-no_npwp"]').should('have.text', message);
    }
})
