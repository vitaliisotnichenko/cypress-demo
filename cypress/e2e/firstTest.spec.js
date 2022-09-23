
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

    it.only('then and wrap methods', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(emailLabelSecond).to.equal('Email address')
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })

        })
    })
})