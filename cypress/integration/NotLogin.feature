@projeto

Feature: Não fazer login no site SERVEREST

    Scenario: Erro ao logar
        Given acesso o site serverest
        When preencho os dados de login errado
        And clico no botão Entrar
        Then devo ver uma mensagem de erro