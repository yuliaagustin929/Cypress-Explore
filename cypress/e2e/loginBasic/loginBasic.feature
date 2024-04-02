Feature: Login feature

  Scenario Outline: [Login] Successfully logged in with active account 
    Given Agent access Agent tools home page
    When Agent click login button
    And Agent input valid active phone number 
    And Agent click Konfirmasi button 
    And Agent input OTP 
    And Agent click konfirmasi button 
    Then Agent should be able to see lounge
