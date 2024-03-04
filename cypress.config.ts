import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

//install cypress mochawesome-reporter
//npm i --save-dev cypress-mochawesome-reporter

// add reporter and reporterOptions to cypress.config.json the
//
