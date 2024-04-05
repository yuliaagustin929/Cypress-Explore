import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pom/loginPage'; 
import LoungePage from "../../pom/loungePage";

Given ('Agent access link web Agent Tools', () =>{
    cy.viewport('iphone-xr');
    cy.visit ({
        url: 'https://orientasi.sit.bravo.bfi.co.id/', 
        failOnStatusCode: false
    });
});

When ('Agent login with valid phone number', () =>{
    LoginPage.loginButton.click();
    LoginPage.phoneNumberField.clear().type('866433665526');
    LoginPage.sendVerifiCodeButton.click();
    LoginPage.inputOtp1.type('1');
    LoginPage.inputOtp2.type('1');
    LoginPage.inputOtp3.type('1');
    LoginPage.inputOtp4.type('1');
    LoginPage.sendVerifiConfirmButton.click();
    cy.wait (1000);
   LoginPage.loungeBar.should('be.visible');
});

When ('Agent click field customer', () =>{
    LoungePage.CustomerField.click();
});

When ('Agent input {string}', () =>{
    LoungePage.CustomerField.clear.type('testing');
});

Then ('Agent success search customer', () =>{
    LoungePage.resultField.should('be.visible');
});

Then ('Agent should be able to see lounge page', () => {
    LoungePage.GagalField.should('be.visible');
});