## PROJETO UI(WebPage)
Esse projeto consiste em testar o login válido e o login inválido (dois testes) de usuários criados por API. Para criar os usuários, você pode acessar e executar o outro projeto que está no GitHub localizado em https://github.com/rodrigosalles7/PROJETO-WebService-API, ou pode criar através do site https://front.serverest.dev/login.

### Baixar a pasta com o projeto

Fazer o download da pasta zipada pelo link https://github.com/rodrigosalles7/PROJETO-UI-WebPage/archive/refs/heads/main.zip ou se preferir utilizar o terminal executando:
```
git clone https://github.com/rodrigosalles7/PROJETO-UI-WebPage.git
```
Utilizamos o Cypress com Cucumber, para escrever e realizar os testes de forma mais organizada e completa.

### Instalação do VS Code e NodeJS

Para escrever o código, foi utilizado o VS Code, mas você pode utilizar outro editor de texto de sua preferência.
Lembrando que não é necessária a instalação dele se você não for alterar o código.

#### VS Code

1. Baixar o instalador do VS Code para Windows através do link https://code.visualstudio.com/download;
2. Executar o arquivo **.exe** que foi baixado;
3. Realizar a instalção.

#### NodeJS

1. Baixar o instalador do NodeJS para Windows através do link https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi;
2. Executar o arquivo **.msi** que foi baixado;
3. Realizar a instalação.

### Instação do Cypress

1. Vá até a pasta que foi baixada do GitHub;
2. Abra o terminal que possui em seu computador (Git Bash ou CMD) na pasta;
3. Execute o seguinte comando para realizar a instalação:

```
npm install --save-dev cypress cypress-cucumber-preprocessor
```

Pronto, agora é só rodar os testes.

### Executando os testes

Abra o terminal que possui em seu computador (Git Bash ou CMD) na pasta que foi baixada do GitHub;

Existe duas formas de realizar os teste, através do terminal que executa tudo de forma automática ou através do próprio Cypress escolhendo se quer executar um os dois testes de uma só vez.

### Executando os testes através da interface do Cypress

1. Para abrir o Cypress para executar os dois testes separados ou juntos, basta executar o comando:

```
npm run open
```
Este comando é a execução de um Script que foi criado para abrir o Cypress.

2. No Cypress, podemos clicar em **Run 2 integration specs** e executar os dois testes de uma vez. Mas se preferir, podem também clicar em **Login.feature** ou em **NotLogin.feature** para executar um teste de cada vez. Selecione a opção de navegador Chrome 100.

![image](https://user-images.githubusercontent.com/72480923/163760395-0d6b6036-7c3b-4daa-aa3e-2a6f740a6c7d.png)

3. É possível obervar se o teste passou ou falhou através da própria aba do navegador que é aberta.

![image](https://user-images.githubusercontent.com/72480923/163764487-be24b763-ff9a-4a8c-a3b0-67354ef3069b.png)

4. Depois de já ter executado o teste como desejado, clique no botão **Stop** para finalizar o teste. Caso você tenha optado por executar um teste de cada vez, é só clicar em **Stop** e depois realizar o mesmo procedimento para o outro teste.
 
![image](https://user-images.githubusercontent.com/72480923/163760333-e3e91a2a-12d3-42f1-8a20-adc2c2020abd.png)

### Executando os testes através do terminal

1. Para executar os dois testes de uma vez através do terminal, execute o comando:

```
npm run test:chrome
```
Ao final do teste, é possível observar se os testes foram aprovados ou recusados através do próprio terminal.

![image](https://user-images.githubusercontent.com/72480923/163763340-6cc53b45-840b-408c-be49-8140d128c6ab.png)

![image](https://user-images.githubusercontent.com/72480923/163763372-acdc96d7-53cc-4d7c-aca8-852d2f813c9e.png)


#### Todos os comandos que foram executados no terminal do computador, também podem ser executados no terminal do VS Code.
