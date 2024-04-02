# @ProjectKey-BAAT
Feature: Login feature

    Background:
        Given Agent access agent tool 'home' page

    # @BAAT-T2377
    Scenario Outline: [Login] Successfully logged in with active account 
        When Agent login with 'active' credentials
        Then Agent should be able to see lounge page

    # @BAAT-T2377
    Scenario Outline: [Login] Agent failed to login with inactive account
        When Agent login with 'inactive' credentials
        Then Agent can see reactivasi account page

    # @BAAT-T2377
    Scenario Outline: [Login] Agent failed to login with unregistered account
        When Agent login with 'unregistered' credentials
        Then Agent can see pop up message for unregistered agent

    # @BAAT-T2377
    Scenario Outline: Login Validation
        When Agent login with "<phoneNumber>" phone number
        Then Agent can see "<message>" must input valid phone number

        Examples:
        | phoneNumber       | message                           |
        | empty             | Masukkan Nomor Telepon            |
        | moreThanMaxDigit  | Maksimal 14 digit                 |
        | lessThanMinDigit  | Minimal 10 digit                  |
        | invalidFormat     | Masukkan Nomor Ponsel yang valid  |

