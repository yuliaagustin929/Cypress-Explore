import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Agent access agent tools home page', () => {
<<<<<<< HEAD
    cy.viewport('iphone-xr');
    cy.visit({
        url: 'https://orientasi.sit.bravo.bfi.co.id/',
=======
    cy.viewport('iphone-xr'); 
    cy.visit({
        url: 'https://orientasi.sit.bravo.bfi.co.id/', 
>>>>>>> 66f10fa91944e071b7ccb94bec266cf0dc5a0c7e
        failOnStatusCode: false
    });
});

<<<<<<< HEAD
When('Agent click login button', () =>{
    cy.get('#loginButton').click();
})

When('Agent input valid phone number ', () =>{
    cy.get('[#data-testid="mobile_phone"]').click();
})

When('Agent input valid phone number ', () =>{
    cy.get('[#data-testid="mobile_phone"]').click();
})
=======

When('Agent click login button', () => {
    cy.get('#loginButton').click();
});

When('Agent click konfirmasi button', () => {
    cy.get('#sendLoginCodeButton').click()
})

When('Agent input {string} phone number', (phoneNumber) => {
    cy.get('[data-testid="mobile_phone"]').clear().type(phoneNumber);
})

When('Agent input OTP', () => {
    cy.get('[data-testid="otp1"]').type('1');
    cy.get('[data-testid="otp2"]').type('1');
    cy.get('[data-testid="otp3"]').type('1');
    cy.get('[data-testid="otp4"]').type('1');
})


When('Agent click konfirmasi button Otp', () => {
    cy.get('#verificationConfirmButton').click();
})


When('Agent should be able to see lounge', () => {
    cy.wait(1000);
    cy.get('[data-testid="goto-beranda"]').should('be.visible');
    cy.url().should('eq', 'https://orientasi.sit.bravo.bfi.co.id/lounge');
});
>>>>>>> 66f10fa91944e071b7ccb94bec266cf0dc5a0c7e
