@ProjectKey-BAAT
Feature: Lounge feature    
    
    Background:
        Given Agent access agent tool 'home' page
        And Agent login as "866433665526" Agent

        Scenario Outline: Open Image, swipe, close, select by dot
        When Agent should be able to see lounge page
        And Agent click banner
        Then Verify banner functionality