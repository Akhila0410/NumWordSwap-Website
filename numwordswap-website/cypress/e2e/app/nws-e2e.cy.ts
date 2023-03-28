context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    })

    it("Welcome message display test", () => {
        cy.get("#welcomeMessage").should("be.visible");
        cy.get("#maxNumber")
            .type("10").should('have.value', "10");
        cy.get("#welcomeMessage").should('not.exist');
    })


    it("Display swapped number word blocks should be equal to the max number", () => {
        cy.get("#maxNumber")
            .type("10").should('have.value', "10");
        cy.get("#nwsResult").children().should('have.length', 10);
    })

})