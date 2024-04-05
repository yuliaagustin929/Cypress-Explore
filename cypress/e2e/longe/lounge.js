import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loungePage from '../../pom/lounge';

When('Agent click banner', () => {
    loungePage.banner().click();
  });

Then('Verify banner functionality', () => {
    loungePage.imageBanner().should('exist');
    loungePage.bannerPreview().should('be.visible');
    loungePage.closeBanner().click();
  });

