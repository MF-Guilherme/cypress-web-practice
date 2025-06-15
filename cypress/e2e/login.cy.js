describe('Login', () => {
    it('Login com sucesso', () => {

        //1 - Acessar a tela de login
        cy.visit('https://automationpratice.com.br/login')

        //2 - Preencher o campo de email válido
        cy.get('#user')
        cy.get('#user').type('guimontenegro23@yahoo.com.br')
        //3 - Preencher o campo de senha válida
        cy.get('#password')
        cy.get('#password').type('123456')
        //4 - Clicar no botão de login
        cy.get('#btnLogin').click()
        //5 - Verificar se o usuário foi redirecionado para a página inicial e aparece a mensagem de login com sucesso
        cy.get('#swal2-title').should('contain', 'Login realizado')
    })

    it('Email inválido', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('emailinvalido')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('contain', 'E-mail inválido.')
    })

    
    it('Senha Inválida', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#user').type('guimontenegro23@yahoo.com.br')
        cy.get('#password').type('123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('contain', 'Senha inválida.')
        
    })

    it('Campos vazios', () => {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('contain', 'E-mail inválido.')
    })
})