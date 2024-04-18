import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loungePage from '../../pom/lounge';

When('Agent click banner', () => {
    loungePage.banner().click();
  });

Then('Verify all menu is visible', () => {
    loungePage.loungeMenu().should('have.length', 9);
    loungePage.loungeMenu().should('be.visible');
}); 

Then('Verify can search customer', () => {
    loungePage.searchCustomer().wait(500).click(); 
    loungePage.searchCustomerName().type('tes');
    loungePage.searchCustomerBackBtn().click();
})
Then('Verify banner functionality', () => {
    loungePage.imageBanner().should('exist');
    loungePage.bannerPreview().should('be.visible');
    loungePage.closeBanner().click();
  });

