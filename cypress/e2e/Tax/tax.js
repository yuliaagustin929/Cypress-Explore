

Given('Agent access agent tools homepage', ()=>{
    cy.viewport('iphone-xr');
    cy.visit({
        url:'https://orientasi.sit.bravo.bfi.co.id/',
        failOnStatusCode: false
    });
}
);

When('Agent access account page', ()=>{
    cy.get('data-testid="goto-akun"').click();
    cy.get('data-testid="page-title"').should('be.visible');
});

When('Agent click Informasi NWPW menu', ()=>{
    cy.get('data-testid="goToNPWPInformationButton"').click();
    cy.get('data-testid="page-title"').should('be.visible');
})

When('Agent click Ubah button', ()=>{
    cy.get('[bravo-wrapper-211 bravo-wrapper-d12-507]').click();
    cy.get('[data-testid="page-title"]').should('be.visible');
})

Then('Agent input NPWP number and validate Error Message', ()=>{
    cy.get('[data-testid="no_npwp"]').type('')

})