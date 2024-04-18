/* Login Page */

export default class LoungePage {
    static CustomerField() {
      return cy.get('[data-testid="search-customer-name-static"]').click();
    }
    static resultField() {
      return cy.get('[data-testid="item-jGXvij9EP"]');
    }
    static GagalField() {
      return cy.contains('Pencarian tidak ditemukan');
    }
  }
  