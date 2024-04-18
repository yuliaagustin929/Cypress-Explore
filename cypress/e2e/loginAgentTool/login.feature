Feature: Login feature

    Background:
        Given Agent access agent tool 'home' page

    Scenario Outline: [Login] Successfully logged in with active account 
        When Agent login with 'active' credentials
        Then Agent should be able to see lounge page

    Scenario Outline: Login Validation
        When Agent login with "<phoneNumber>" phone number
        Then Agent can see "<message>" must input valid phone number

        Examples:
        | phoneNumber       | message                           |
        |                   | Masukkan Nomor Telepon            |
        | 89854656576876    | Maksimal 14 digit                 |
        | 89656             | Minimal 10 digit                  |
        | 79656764567       | Masukkan Nomor Ponsel yang valid  |

