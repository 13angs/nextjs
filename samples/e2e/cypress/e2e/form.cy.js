// cypress/integration/form.spec.js
describe('Signup Form', () => {
    beforeEach(() => {
        cy.visit('/signup');
    });

    it('displays error message when form is submitted with empty fields', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('All fields are required').should('be.visible');
    });

    it('displays error message for invalid email', () => {
        cy.get('input#name').type('John Doe');
        cy.get('input#email').type('invalidemail');
        cy.get('button[type="submit"]').click();
        
        // Ensure Cypress waits until the error is rendered
        cy.contains('Please enter a valid email').should('be.visible');
    });

    it('submits the form successfully with valid input', () => {
        cy.get('input#name').type('John Doe');
        cy.get('input#email').type('john.doe@example.com');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Form submitted successfully!');
        });
    });
});