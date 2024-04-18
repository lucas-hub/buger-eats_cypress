/// <reference types="Cypress" />

describe('Buger GUI Testing', ()=> {
    beforeEach(()=> {
        cy.visit('https://buger-eats-qa.vercel.app/')
    })

    it('Successfully', ()=> {
        cy.EnterLandingPage()

        cy.FillCorrectly()
        cy.get('input[name="address"]').should('have.value', 'Rua Bento Araújo')
        cy.get('input[name="district"]').should('have.value', 'Barro Branco (Zona Norte)')
        cy.get('input[name="city-uf"]').should('have.value', 'São Paulo/SP')

        cy.SendFile()

        cy.get('.button-success').click()
        cy.get('.swal2-popup').should('be.visible')
        cy.get('.swal2-confirm').should('be.visible').click()
    })

    it('Incorreclty', ()=> {
        cy.EnterLandingPage()

        cy.FillIncorrectlyAndShowsErrorMessages()
    })
})