const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalPromptCommand: true, // This is the "magic" line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Update to your target site
  },
});