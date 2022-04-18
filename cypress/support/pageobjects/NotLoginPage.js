/// <reference types="Cypress" />

import NotLoginElements from '../elements/NotLoginElements'
const notloginElements = new NotLoginElements
const url = Cypress.config("baseUrl")
var email2 = "fulano2@qa.com";
var senha2 = "teste2";

class NotLoginPage {
    // Acessa o site que será testado
    acessarSite2() {
        cy.visit(url)
    }
    
    // Preenche os Dados de Login (Email e Senha)
    preencherDadosLogin2() {
        cy.get(notloginElements.emailLogin2()).type(email2)
        cy.get(notloginElements.senhaLogin2()).type(senha2)
    }
  
    // Clica no botão Entrar para realizar Login
    clicarBotaoEntrar2() {
        cy.get(notloginElements.botaoEntrar2()).click()
    }

    // Não faz Login e apresenta uma mensagem de Erro
    naoFazerLogin() {
        cy.get(notloginElements.mensagemErro())
    }
}

export default NotLoginPage;