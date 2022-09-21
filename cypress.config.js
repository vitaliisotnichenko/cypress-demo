const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1020,
  e2e: {
    baseUrl: 'http://localhost:42000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  }
})