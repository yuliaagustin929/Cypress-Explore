import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(`Agent access agent tools home page`, () => {
  cy.viewport('iphone-xr');
  cy.visit({
    url:  'https://orientasi.sit.bravo.bfi.co.id/',
    failOnStatusCode:false
  })
  });

  When('Agent click login button',() => {
    cy.get('#loginButton').click();
    });

    Then('Agent input valid phone number', () => {
        cy.get('[data-testid="mobile_phone"]').type('866433665526');
    });

    Then('Agent click kirim kode verifikasi button', () => {
            cy.get('#sendLoginCodeButton').click();
          });

          Then('Agent input OTP', () => {
            cy.get('[data-testid="otp1"]').type('1');
            cy.get('[data-testid="otp2"]').type('1');
            cy.get('[data-testid="otp3"]').type('1');
            cy.get('[data-testid="otp4"]').type('1');
            });
            Then('Agent click konfirmasi button', () => {
                cy.get('#verificationConfirmButton').click();
              });
          Then('Agent should be able to see lounge', () => {
            cy.wait(1000);
            cy.get('[data-testid="goto-beranda"]').click();
          });

          Then('Agent go to Account page', ()=>{
            cy.get('[data-testid="goto-akun"]').click()
        })
        
        Then('Agent click Informasi NPWP',()=>{
            cy.get('#goToNPWPInformationButton').click()
            cy.get('[class*="bravo-info"]').eq(1)
        })