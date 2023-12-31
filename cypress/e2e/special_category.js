describe('Specials category testing', () => {

    it('summation for all old prices and for all new prices ', () => {

        cy.visit("https://www.automationteststore.com/")

        // initialize variables for sum
        var SumOldPrices = 0;
        var SumNewPrices = 0;

        // sum all old prices 
        cy.get('#special > .container-fluid')
            .find(".priceold")
            .each(($item) => {
                cy.wrap($item)
                    .invoke("text")
                    .then((old_price) => {
                        let OldPrice = parseFloat(old_price.replace("$", ""));
                        SumOldPrices += OldPrice;
                    })
            })

            .then(() => {
                // alert msg for sum old prices
                cy.log(`the sum for all old prices is:  ${SumOldPrices}`);
                alert(`the sum for all old prices is:  ${SumOldPrices}`);
            });

        // sum all new prices 
        cy.get('#special > .container-fluid')
            .find(".pricenew")
            .each(($item) => {
                cy.wrap($item)
                    .invoke("text")
                    .then((new_price) => {
                        let NewPrice = parseFloat(new_price.replace("$", ""));
                        SumNewPrices += NewPrice;
                    })
            })

            .then(() => {
                // alert msg for sum new prices
                cy.log(`the sum for all new prices is:  ${SumNewPrices}`);
                alert(`the sum for all new prices is:  ${SumNewPrices}`);
            });

    });// end test case

});// end suit case