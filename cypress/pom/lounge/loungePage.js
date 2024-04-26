/* Login Page */

export default class LoungePage {
    static loungePage() {
      return cy.get('[data-testid="goto-beranda"]',  { timeout: 17000 });
    }
    static verificationFullname(){
        return cy.contains('NEW BAU AGENT');
    }
    static customerField(){
        return cy.get('[data-testid="search-customer-name-static"]');
    }
    static searchCustomer(){
        return cy.get('[data-testid="search-customer-name"]');
    }
    static prospekMenu(){
        return cy.get('[data-testid="goto-prospek-aplikasi"]');
    }
    static kalkulatorMenu(){
        return cy.get('[data-testid="goto-kalkulator-simulasi"]');
    }
    static insentifMenu(){
        return cy.get('[data-testid="goto-insentif-saya"]');
    }
    static targetMenu(){
        return cy.get('[data-testid="goto-target-performa"]');
    }
    static pinjamanMenu(){
        return cy.get('[data-testid="goto-pinjaman-operasional"]');
    }
    static modulMenu(){
        return cy.get('[data-testid="goto-modul-belajar"]');
    }
    static loyaltiMenu(){
        return cy.get('[data-testid="goto-program-loyalti"]');
    }
    static promosiMenu(){
        return cy.get('[data-testid="goto-bahan-promosi"]');
    }
    static chatMenu(){
        return cy.get('[data-testid="goto-chat-ai"]');
    }
    static customerAppears(){
        return cy.get('[data-testid="search-content-area"]');
    }
}