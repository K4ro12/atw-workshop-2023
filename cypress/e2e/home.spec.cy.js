
// Note all test are just dummies
describe('Homepage flow', () => {
    before(() => {
        cy.visit('');
    })

    it('Should check if Calender of Events is correct', () => {
        // Enter main page
        // on top of side there should slide with new products and promotion aka Calender of Events
        // check if it displays properly
        // and elements are clickable

        //check aslo big banner above it if it displayes and is clickable

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

it('Should check if tab Categories is correct', () => {
        // check if all categories are displayed
        // check if they are clickable
        // check if they are displayed properly

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it('Should check if page bottom is correct', () => {
        // check if footer is displayed
        // check if all elements are displayed
        // check if all elements are clickable

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it('Should check if tab Logo is displayed and clickable', () => {
        // check if logo is displayed
        // check if logo is clickable

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it('Should check if product from best selling can be added to cart', () => {
        //check if best selling feed is displayed
        // click first product
        // add it to cart
        // check if go to cart screen is displayed
        // go to cart and check product

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it('Should check if Search works correctly', () => {
        // check if search bar is displayed
        // check if it is clickable
        // scroll down and check if it is no longer displayed
        // scroll up and check if it is displayed
        // scroll down and click on magnifing glass
        // check if search bar is displayed

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })


    it('Should check if product can be added to wishlist', () => {
        // select random product in any feed on HomePage
        // click on heart
        // check if product is added to wishlist

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })
})
