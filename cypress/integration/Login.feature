@projeto

Feature: Login no site SERVEREST

    Scenario: Logar no site
        Given acesso o site SERVEREST
        When preencho os dados de login
        And clico no botão ENTRAR
        Then devo logar no site