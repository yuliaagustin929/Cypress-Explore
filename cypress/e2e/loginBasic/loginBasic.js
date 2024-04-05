import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


let baseUrl = 'https://orientasi.sit.bravo.bfi.co.id'
Given('Agent access agent tools home page', () => {
    cy.viewport('iphone-x')
    cy.visit(baseUrl)
})

When('Agent click login button', ()=>{
    cy.get('#loginButton').click()
})

Then('Agent input valid phone number',()=>{
    cy.get('[data-testid="mobile_phone"]').type('866433665526')
})

Then('Agent click konfirmasi OTP button', ()=>{
    cy.get('#sendLoginCodeButton').click()
})

Then('Agent input OTP', ()=>{
    cy.get('[data-testid="otp1"]').type('1')
    cy.get('[data-testid="otp2"]').type('1')
    cy.get('[data-testid="otp3"]').type('1')
    cy.get('[data-testid="otp4"]').type('1')
})

Then('Agent click konfirmasi button', ()=>{
    cy.get('#verificationConfirmButton').click()
})

Then('Agent should be able to see lounge', ()=>{
    cy.url().should('eq', `${baseUrl}/lounge`)
})

Then('Agent go to Account page', ()=>{
    cy.get('[data-testid="goto-akun"]').click()
})

Then('Agent click Informasi NPWP',()=>{
    cy.get('#goToNPWPInformationButton').click()
    //cy.get(':nth-child(2) > .bravo-text-**').eq('363104621003000')
    // cy.contains('363104621003000').should('be.visible')
    cy.get('[class*="bravo-info"]').eq(1)
})
