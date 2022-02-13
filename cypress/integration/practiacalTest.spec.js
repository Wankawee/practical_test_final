/// <reference types="Cypress" />

describe('Scenario 1: Login to system', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('ARTHUR_BASE_URL'))
        cy.get('[class="input email required"]').type(Cypress.env('USERNAME'))
        cy.get('[class="input password required"]').type(Cypress.env('PASSWORD'))
        cy.get('[type="submit"]').click()
    })

    it('should login successfully', () => {
        cy.url().should('include', '/robottester/dashboards/index')
    })
})

describe('Scenario 2: Add a property with a multiple rentable units', () => {
    beforeEach(() => {
        // User login
        cy.visit(Cypress.env('ARTHUR_BASE_URL'))
        cy.get('[class="input email required"]').type(Cypress.env('USERNAME'))
        cy.get('[class="input password required"]').type(Cypress.env('PASSWORD'))
        cy.get('[type="submit"]').click()
        // Navigate to property index page
        cy.get('[class="nano iwrapper-tmp"').get('[class="nano-content sf-menu sf-js-enabled parent default"]').get('[class="alias-properties"]')
        cy.get('[title="Properties"]').click()
        // Click add button
        cy.get('[class="actions"]').get('a[href*="/robottester/properties/add"]').contains('Add Property').click()
        cy.get('[class="head multiple-unit"]').contains('Property with multiple rentable units').click()
        // Create multiple rentable units
        cy.get('[class="property-name-ref"]').get('label[for="ProfileAddressName"]').get('[id="ProfileAddressName"]').type('Test Property Name')
        cy.get('[class="input select add-entity required"]').get('[class="select2-container widthEm21 entity-select"]').click()
        cy.get('[class="select2-results-dept-0 select2-result select2-result-selectable"]').get('[class="select2-result-label"]').contains('Owner 1 - Sansiri').click()
        cy.get('[class="sub-form address"]').get('[class="input text"]').get('input').get('[name="data[Profile][address1]"]').type('123/45 profile address I')
        cy.get('[class="sub-form address"]').get('[class="input text"]').get('input').get('[name="data[Profile][address2]"]').type('678/90 profile address II')
        cy.get('[class="input checkbox"]').get('input[id="PropertyFullAccess"]').should('be.checked')
        cy.get('[class="rentable-units"]').get('input[id="PropertyUnitCount"]').clear().type('2')
        cy.get('[class="page-switcher"').get('[class="next"]').get('input[class="next-page btn btn-default"]').click({force: true})
        cy.get('[class="unit-setting"]').get('[class="input select"]').get('select[class="widthEm10"]').select('Residential')
        cy.get('[class="select2-container widthEm10"]').click().get('[class="select2-result-label"]').contains('Cypress Tester 1').click()
        cy.get('[class="select2-container"]').click().get('[class="select2-results-dept-0 select2-result select2-result-selectable"]').contains('Real Agency').click()
        cy.get('[class="input select add-select2-multiple-adder"]').get('[class="select2-container select2-container-multi unit-setting-certificate-types"]').click()
        cy.get('[class="select2-drop select2-drop-multi select2-display-none select2-drop-active"]').contains('Other').click()
        cy.get('[class="unit-prefix"]').get('button[class="btn apply-prefix"]').contains('Apply All').click()
        cy.get('[class="page-switcher"]').get('[class="next"]').get('input[class="submit btn btn-default"]').click()
    })

    it('should add a property with a multiple units successfully', () => {
        cy.get('[class="detail "]').should('contain', 'Multiple Units Added')
        cy.get('[class="content"]').should('contain', 'Test Property Name')
        cy.get('[class="content"]').should('contain', '2 units have been added.')
        cy.get('[class="nano iwrapper-tmp"').get('[class="alias-properties dropdown sfHover active"]').get('[title="Properties"]').click()
        cy.get('[class="input search"]').get('input[data-model="Property"]').type('Test Property Name')
        cy.get('[class="submit"]').get('input[class="btn btn-secondary"]').click()
        cy.get('table[class="properties"]').get('[class="name "]',{ timeout: 10000 }).contains('Test Property Name').should('be.visible')
        cy.get('[class="property-description "]').contains('Multiple Units').should('be.visible')
    })
})
