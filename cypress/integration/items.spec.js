describe('Test Items', () => {
    it('should test add to cart', () => {
        cy.visit('http://localhost:3000');
        cy.getByTestId("add-to-cart").click();
        cy.getByTestId("items-modal").should('be.visible')
        cy.getByTestId("close-button").click();
        cy.getByTestId("items-modal").should('not.exist')
    })
})