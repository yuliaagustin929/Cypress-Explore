Feature: lounge feature

    Background:
        Given Agent access agent tool 'home' page
        
    Scenario Outline: Lounge Menu Verification
        When Agent login with '866433277757' credentials
        And Agent should be able to see lounge page
        And Agent verify menu in lounge page
        And Agent Search Menu Bar in Lounge Page
        Then customer is appears

