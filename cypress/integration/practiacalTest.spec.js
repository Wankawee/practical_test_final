/// <reference types="Cypress" />

describe('Scenario 1: Login to system', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('ARTHUR_BASE_URL'))
        cy.get('[class="input email required"]').type(Cypress.env('USERNAME'))
        cy.get('[class="input password required"]').type(Cypress.env('PASSWORD'))
    })

    it('should login successfully', () => {
        cy.get('[type="submit"]').click()

    })
})

// describe('Scenario 2: Add a property with a multiple rentable units', () => {
//     beforeEach(() => {
//         // User login
//         cy.visit(Cypress.env('ARTHUR_BASE_URL'))
//         cy.get('[class="input email required"]').type(Cypress.env('USERNAME'))
//         cy.get('[class="input password required"]').type(Cypress.env('PASSWORD'))
//         cy.get('[type="submit"]').click()
//         // Navigate to property index page
//         cy.get('[class="nano iwrapper-tmp"').get('[class="nano-content sf-menu sf-js-enabled parent default"]').get('[class="alias-properties"]')
//         cy.get('[title="Properties"]').click()
//         // Select property with a multiple rentable units option
//         // I tried to find this option but not found anything so, I decided to imagine the next step from your acceptance criteria (sure, it can't execute success)
//         cy.get('input[type="checkbox"]').click('multible rentable units')
//         cy.get('[class="require fields"]').type('valid information')
//         cy.get('[type="checkbox" id="manage this property"]').click()
//         cy.get('[class="rentable unit amount"]').type('2')
//         cy.get('[type="button" id="next unit settings"]').click()
//         cy.get('input[type="checkbox"]').click(['checkbox1','checkbox2','checkbox3','checkboxN'])
//     })

//     it('should add a property with a multiple units successfully', () => {
//         cy.get('[type="button"]').click('add property')
//         cy.get('[class="nano iwrapper-tmp"').get('[class="nano-content sf-menu sf-js-enabled parent default"]').get('[class="alias-properties"]')
//         cy.get('[title="Properties"]').click()
//     })
// })