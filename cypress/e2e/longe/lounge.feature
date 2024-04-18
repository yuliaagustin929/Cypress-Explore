@ProjectKey-BAAT
Feature: Lounge feature    
    
    Background:
        Given Agent access agent tool 'home' page
        And Agent login as "8656678111" Agent

        Scenario Outline: Open Image, swipe, close, select by dot
        When Agent should be able to see lounge page
        Then Verify all menu is visible
        Then Verify can search customer
        And Agent click banner
        Then Verify banner functionality