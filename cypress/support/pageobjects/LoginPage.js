/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
var email = "fulano@qa.com";
var senha = "teste";

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Preenche os Dados de Login (Email e Senha)
    preencherDadosLogin() {
        cy.get(loginElements.emailLogin()).type(email)
        cy.get(loginElements.senhaLogin()).type(senha)
    }
  
    // Clica no botão Entrar para realizar Login
    clicarBotaoEntrar() {
        cy.get(loginElements.botaoEntrar()).click()
    }

    // Verifica se foi feito Login no site através do texto 'Bem Vindo '
    fazerLogin() {
        cy.wait(10000) //Delay para a página seguinte ser carregada e a próxima verificação acontecer
        cy.get(loginElements.botaoLogout())
    }
}

export default LoginPage;
