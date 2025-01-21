describe('Проверка авторизации', function () {

    it('Проверка авторизации: верные логин и пароль', function () {
         cy.visit('login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Проверка формы восстановления пароля: валидные данные', function () {
        cy.visit('login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Проверка авторизации: неверные логин и пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('invalid@mail.ru');
        cy.get('#pass').type('invalidpassword');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Проверка авторизации: верный логин и неверный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('invalidpassword');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Проверка авторизации: невалидная почта и верный пароль', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
    })
    
 }) 