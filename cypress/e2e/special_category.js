describe('Specials category testing', () => {

    it('summation for all old prices and for all new prices ', () => {

        cy.visit("https://www.automationteststore.com/")

        cy.get('#special > .container-fluid')
            .find(".priceold")
            .invoke("text")
            .then((old_price) => {
                cy.log(old_price)
            })

        cy.get('#special > .container-fluid')
            .find(".pricenew")
            .invoke("text")
            .then((new_price) => {
                cy.log(new_price)
            })

    });

});