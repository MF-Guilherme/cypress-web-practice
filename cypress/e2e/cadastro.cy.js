describe('Cadastro', () => {
    it('Cadastro com sucesso', () => {
        
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user')
        cy.get('#user').type('guilherme')
        cy.get('#email')
        cy.get('#email').type('gui@test.com')
        cy.get('#password')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title').should('contain', 'Cadastro realizado!')
        cy.get('#swal2-html-container').should('contain', 'Bem-vindo guilherme')
    })

    it('Nome em branco', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#email').type('gui@test.com')
        cy.get('#password')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('contain', 'O campo nome deve ser prenchido')
    })

    it('Email em branco', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('guilherme')
        cy.get('#password')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })
    
    it('Email inválido', () => {
        cy.visit('https://automationpratice.com.br/register')
        cy.get('#user').type('guilherme')
        cy.get('#email').type('guitest.com')
        cy.get('#password')
        cy.get('#password').type('123456')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })


});