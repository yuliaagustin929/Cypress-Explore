Feature: Tax feature

    Background:
        Given Agent access agent tool 'home' page

    Scenario Outline: [Tax] Validate form input tax number while toggle off  
        When Agent login as "866433665526" Agent
        And Agent access account page
        And Agent click Informsi NPWP menu
        And Agent click Ubah button 
        Then Agent input "<npwpNo>" number and validate error "<message>"

        Examples: 
        | npwpNo    | message               |
        |           | Masukkan NPWP         | 
        |812345     | NPWP harus 15 digit   |
