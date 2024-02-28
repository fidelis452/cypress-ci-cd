import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
  "viewportWidth": 1920,
  "viewportHeight": 1080,
  "video": true,
  "screenshotsFolder": "cypress/screenshots",
  "videosFolder": "cypress/videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});