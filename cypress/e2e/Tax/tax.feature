Feature: Tax feature

    Background:
        Given Agent acess agent tools homepage

    Scenario Outline: [Tax] Validate form input tax number while toggle off
        When Agent login as '866433665526' Agent
        And Agent access account page
        And Agent click Informasi NWPW menu
        And Agent click Ubah button
        Then Agent input NPWP number and validate Error Message