Feature: info NPWP

Background:
    Given Agent access web Agent Tools
    When Agent login with valid phone number
    When Agent click akun button
    And Agent click informasi NPWP button
    And Agent click ubah button

Scenario Outline: Successfully input valid npwp
    And Agent input "363104621003000" npwp
    Then Agent success save npwp

Scenario Outline: Handle Message Error informasi NPWP 
    And Agent input "<npwp>" npwp
    Then Agent can see "<message>" must input valid npwp

Examples:
|npwp| message |
||Masukkan NPWP|
|525252|NPWP harus 15 digit|

