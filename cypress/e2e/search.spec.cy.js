describe('Search flow', () => {
  before(() => {
    cy.visit('');
  });

  it('Should add product to wishlist', () => {
    // on home page search for dragon
    // click on heart on any product
    // check if product is added to wishlist

    cy.randomlyFailTest(Cypress.env('defualtFailureRate'));
  });

  it('Should filter search by color', () => {
    // search for Cats
    // select orange color
    // displayed work count should be smaller
    // orange color should be selected

    cy.randomlyFailTest(Cypress.env('defualtFailureRate'));
  });

  it('Should filter search by orientation', () => {
    // search for Cats
    // select vertical orientation
    // displayed work count should be smaller
    // vertical orientation should be selected

    cy.randomlyFailTest(Cypress.env('defualtFailureRate'));
  });

  it('Should filter search by type', () => {
    // search for Cats
    // select illustration type
    // displayed work count should be smaller
    // illustration type should be selected

    cy.randomlyFailTest(Cypress.env('defualtFailureRate'));
  });

  it('Should show results base on searched phrase', () => {
    //search for cats
    //scroll down to bottom
    //page counter should be displayed
    //related searches should be displayed

    cy.randomlyFailTest(Cypress.env('defualtFailureRate'));
  });

  //not tested
  // forbbiden phrases - for example pokemon should retrun no results and display message to check offical brandshops and this might intres you section
});
