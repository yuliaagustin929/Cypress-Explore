import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoungePage from "../../pom/lounge/loungePage.js";


When('Agent should be able to see lounge', () => {
    cy.wait(1000);
    LoungePage.loungePage().should('be.visible');
    cy.url().should('eq', 'https://orientasi.sit.bravo.bfi.co.id/lounge');
});
When('Agent verification name',() => {
    LoungePage.verificationFullname().should('eq', 'NEW BAU AGENT');
})
    
When('Agent Search Menu Bar in Lounge Page',() => {
    LoungePage.customerField().wait(500).click();
    LoungePage.searchCustomer().type('tes');
})
   
When('Agent verify menu in lounge page',() => {
    LoungePage.prospekMenu().should('be.visible');
    LoungePage.kalkulatorMenu().should('be.visible');
    LoungePage.insentifMenu().should('be.visible');
    LoungePage.targetMenu().should('be.visible');
    LoungePage.pinjamanMenu().should('be.visible');
    LoungePage.modulMenu().should('be.visible');
    LoungePage.loyaltiMenu().should('be.visible');
    LoungePage.promosiMenu().should('be.visible');
    LoungePage.chatMenu().should('be.visible');
})

Then('customer is appears', () => {
    LoungePage.customerAppears().should('be.visible');
})