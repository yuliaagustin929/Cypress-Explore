Feature: Login Basic 
    Scenario: Succesfully logged in with valid phone number
    Given Agent access agent tools home page
    When Agent click login button 
    And Agent input valid phone number 
    And Agent click kirim kode verifikasi button
    And Agent input OTP 
    And Agent click konfirmasi button 
    Then Agent should be able to see lounge
    And Agent go to Account page
    And Agent click Informasi NPWP