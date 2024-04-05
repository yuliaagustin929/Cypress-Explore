Feature: Login feature

    Background:
        Given Agent access agent tool 'home' page

    # Scenario Outline: [Login] Successfully logged in with active account 
    #     When Agent login with '866433277757' credentials
    #     Then Agent should be able to see lounge page

    # Scenario Outline: Login Validation
    #     When Agent login with "<phoneNumber>" phone number
    #     Then Agent can see "<message>" must input valid phone number

    Scenario Outline: NPWP Validation
        When Agent login as '866433665526' Agent
        When Agent Click Account Akun
        When Agent Click Informasi npwp
        When Agent Click ubah npwp
        When Agent input with "<npwpNumber>" npwp number
        Then Agent can see "<message>" must input valid npwp number

        Examples:
        | npwpNumber        | message                           | 
        | 97                | NPWP harus 15 digit               | 
        # | 89854656576876    | Maksimal 14 digit                 |
        # | 89656             | Minimal 10 digit                  |
        # | 79656764567       | Masukkan Nomor Ponsel yang valid  |
        

