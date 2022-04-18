/* global Given, Then, And, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site SERVEREST", () => {
    loginPage.acessarSite();
})

When("preencho os dados de login", () => {
    loginPage.preencherDadosLogin();
})

And("clico no botão ENTRAR", () => {
    loginPage.clicarBotaoEntrar();
})

Then("devo logar no site", () => {
    loginPage.fazerLogin();
})
