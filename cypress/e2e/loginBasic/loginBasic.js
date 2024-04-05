import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Agent access agent tools home page', () => {
    cy.viewport('iphone-xr');
    cy.visit({
        url: 'https://orientasi.sit.bravo.bfi.co.id/',
        failOnStatusCode: false
    });
});

When('Agent click login button', () =>{
    cy.get('#loginButton').click();
})

When('Agent input valid phone number ', () =>{
    cy.get('[#data-testid="mobile_phone"]').click();
})
