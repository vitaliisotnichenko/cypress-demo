
describe('Our first suite', () => {
    beforeEach('', () => {
        cy.visit('/')
    })
    it('First test', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-cy="imputEmail1"]')
    })

    it('Second test', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.get('[data-cy="signInButton"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })
})