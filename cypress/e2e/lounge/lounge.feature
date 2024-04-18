Feature: Lounge Page

Background:
    Given Agent access web Agent Tools
    When Agent login with valid phone number
    When Agent click field customer 

Scenario Outline: Successfully input nama customer
    And Agent input "testing"
    Then Agent success search customer

Scenario Outline: Validation nama customer
    And Agent input customer "budi"
    Then Agent can see page failed customer


