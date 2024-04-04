Feature: Login Basic 

    Scenario: Succesfully logged in with valid phone number
    Given Agent access agent tools home page
    When Agent click login button 
    And Agent input '866433665526' phone number 
    And Agent click konfirmasi button 
    And Agent input OTP 
    And Agent click konfirmasi button Otp
    Then Agent should be able to see lounge
