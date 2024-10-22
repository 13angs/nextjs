// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000', // Set your baseUrl here
        supportFile: false, // Disable the support file
        setupNodeEvents(on, config) {
            // implement node event listeners here if needed
        },
    },
});
