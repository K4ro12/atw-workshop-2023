describe('Add To Cart Flow', () => {
    beforeEach(() => {
        cy.visit('');
    })

    it("Should not remove item from wishlist when adding it to cart from wishlist", () => { // P4
      //add something to wishlist
        //go to wishlist
        //click on
        //check if item is still in wishlist
        // and has addet to cart text
        cy.log(Cypress.env("defualtFailureRate"))
        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Should be able to buy item with set addons", () => { // P1
        //add plate to cart
        //in cart
        // add gloss
        // add frame
        // change size
        // change count
        //check if price is correct

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Should change the currency to usd when country set to USA ", () => { // P2
        //add plate to cart
        //in cart
        // change country to poland
        // price is in euro
        // change country to usa
        // price is in usd

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Should apply discount on price when valid dicount code is added", () => { // P2 Note: can add negative case
        //add plate to cart
        //in cart click on discount
        // insert  discount code
        // price is lower

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Should be able to remove item from cart", () => { // P1
        //add plate to cart
        // add difrent plate to cart
        // go to cart
        // remove 1st plate
        // plate remove
        // remove 2nd plate
        //redirect to homepage

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    // trees counter is not checkedm
    //not covered cant sell some products in some countires -example starwars in venezula
})