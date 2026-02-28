const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalPromptCommand: true, // This is the "magic" line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/', // Update to your target site
  },
});