/* global Given, Then, And, When */

import NotLoginPage from '../pageobjects/NotLoginPage'
const notloginPage = new NotLoginPage

Given("acesso o site serverest", () => {
    notloginPage.acessarSite2();
})

When("preencho os dados de login errado", () => {
    notloginPage.preencherDadosLogin2();
})

And("clico no botão Entrar", () => {
    notloginPage.clicarBotaoEntrar2();
})

Then("devo ver uma mensagem de erro", () => {
    notloginPage.naoFazerLogin();
})