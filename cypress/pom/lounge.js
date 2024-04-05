/* Lounge Page */

export default class LoungePage {
    /*general*/
    static haloLabel() {
      return cy.contains('Halo,');
    }
    static nameAgentLabel() {
      return cy.contains('Automation Agent Mobil');
    }
    static backButton() {
      return cy.get('[data-testid="header-back-button"]');
    }
    static pageTitle() {
      return cy.get('[data-testid="page-title"]');
    }
    /*navbar*/
    static loungeMenu() {
      return cy.get('[data-testid="goto-beranda"]');
    }
    static pesanMenu() {
      return cy.get('[data-testid="goto-pesan"]');
    }
    static leadSubmissionMenu() {
      return cy.get('[data-testid="goto-lead-submission"]');
    }
    static aktivitasMenu() {
      return cy.get('[data-testid="goto-aktivitas"]');
    }
    static akunMenu() {
      return cy.get('[data-testid="goto-akun"]');
    }
    /*prospek*/
    static prospekAplikasiMenu() {
      return cy.get('[data-testid="goto-prospek-aplikasi"]');
    }
    static prospekAplikasiLabel() {
      return cy.contains('Prospek Aplikasi');
    }
    /*kalkulator*/
    static kalkulatorSimulasiMenu() {
      return cy.get('[data-testid="goto-kalkulator-simulasi"]');
    }
    static kalkulatorSimulasiLabel() {
      return cy.contains('Kalkulator Simulasi');
    }
    /*insentif*/
    static insentifSayaMenu() {
      return cy.get('[data-testid="goto-insentif-saya"]');
    }
    static insentifSayaLabel() {
      return cy.contains('Insentif Saya');
    }
    /*target*/
    static targetPerformaMenu() {
      return cy.get('[data-testid="goto-target-performa"]');
    }
    static targetPerformaLabel() {
      return cy.contains('Target Performa');
    }
    /*pinjaman*/
    static pinjamanOperasionalMenu() {
      return cy.get('[data-testid="goto-pinjaman-operasional"]');
    }
    static pinjamanOperasionalLabel() {
      return cy.contains('Pinjaman Operasional');
    }
    /*modul Belajar*/
    static moduleBelajarMenu() {
      return cy.get('[data-testid="goto-modul-belajar"]');
    }
    static moduleBelajarLabel() {
      return cy.contains('Modul Belajar');
    }
    /*program Loyalti*/
    static programLoyaltiMenu() {
      return cy.get('[data-testid="goto-program-loyalti"]');
    }
    static programLoyaltiLabel() {
      return cy.contains('Program Loyalti');
    }
    /*bahan promosi*/
    static bahanPromosiMenu() {
      return cy.get('[data-testid="goto-bahan-promosi"]');
    }
    static bahanPromosiLabel() {
      return cy.contains('Bahan Promosi');
    }
  
    /*Banner*/
    static bannerPreview() {
      return cy.get('[class*="content"]');
    }
    static dotBanner() {
      return cy.get('[class*="swiper-pagination-bullet"]');
    }
    static closeBanner() {
      return cy.get('[data-testid="close-image-viewer"]');
    }
    static banner() {
      return cy.get('[class*="swiper-slide-active"]');
    }
    static searchCustomerSection() {
      return cy.get('button[class^="bravo-searchInput-"]');
    }
  
    static searchCustomerField() {
      return cy.get('button[class^="bravo-searchInput-"]').find('[data-testid="search-customer-name-static"]');
    }
    static formSearchCustomer() {
      return cy.get('[data-testid="form-search"]');
    }
    static contentList() {
      return cy.get('[data-testid="search-content-area"]');
    }
    static backProspectBtn() {
      return cy.get('[data-testid="header-back-button"]');
    }
    static berandaMenu() {
      return cy.get('[data-testid="goto-beranda"]');
    }
    static imageBanner(){ 
      return cy.get('[data-testid="image-viewer"]');
    }
  }
  