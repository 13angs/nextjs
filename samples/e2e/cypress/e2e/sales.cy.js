describe('Sales Page E2E Test', () => {
    beforeEach(() => {
        cy.visit('/'); // Navigate to the sales page
    });

    it('should display the products on the sales page', () => {
        cy.contains('Product 1').should('be.visible');
        cy.contains('Product 2').should('be.visible');
        cy.contains('Product 3').should('be.visible');
    });

    it('should add and remove products from the cart', () => {
        // Add Product 1 to the cart
        cy.contains('Product 1').parent().contains('Add to Cart').click();
        cy.get('.SalesPage_cart__SqCte').contains('Product 1').should('be.visible');

        // Remove Product 1 from the cart
        cy.get('.SalesPage_cart__SqCte').contains('Product 1').parent().contains('Remove').click();
        cy.get('.SalesPage_cart__SqCte').contains('Your cart is empty.').should('be.visible');
    });

    it('should correctly calculate the total price', () => {
        // Add Product 1 and Product 2 to the cart
        cy.contains('Product 1').parent().contains('Add to Cart').click();
        cy.contains('Product 2').parent().contains('Add to Cart').click();

        // Check total price
        cy.contains('Total Price: $300').should('be.visible');
    });

    it('should reset cart after checkout', () => {
        // Add a product and checkout
        cy.contains('Product 1').parent().contains('Add to Cart').click();
        cy.contains('Checkout').click();

        // Check if the cart is empty after checkout
        cy.get('.SalesPage_cart__SqCte').contains('Your cart is empty.').should('be.visible');
    });
});
