Feature: Login Basic 
    Scenario: Succesfully logged in with valid phone number
    Given Agent access agent tools home page
    When Agent click login button 
    Then Agent input valid phone number 
    Then Agent click konfirmasi OTP button 
    Then Agent input OTP 
    Then Agent click konfirmasi button 
    Then Agent should be able to see lounge
    Then Agent go to Account page
    Then Agent click Informasi NPWP