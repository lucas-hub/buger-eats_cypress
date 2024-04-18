/// <reference types="Cypress" />

Cypress.Commands.add('EnterLandingPage', ()=> {
    cy.get('h1').should('be.visible')
    cy.contains('strong', 'Cadastre-se para fazer entregas').click()   
})

Cypress.Commands.add('FillCorrectly', ()=> {
    cy.get('input[name="fullName"]').type('Lucas')
    cy.get('input[name="cpf"]').type('11111122222')
    cy.get('input[name="email"]').type('lucas@gmail.com')
    cy.get('input[name="whatsapp"]').type('911112222')

    cy.get('input[name="postalcode"]').type('02345-040')
    cy.get('input[value="Buscar CEP"]').click()

    cy.get('input[name="address-number"]').type('2')
    cy.get('input[name="address-details"]').type('Ap 222')

    cy.get('.delivery-method > :nth-child(1)').click()
})

Cypress.Commands.add('SendFile', ()=> {
    cy.get('input[type="file"]').invoke('show').click().selectFile('cypress/fixtures/example.json').should(($input) => {
        expect($input[0].files[0].name).to.equal('example.json')
    }).should('have.length', 1)
})