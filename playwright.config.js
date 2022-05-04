const {
  devices
} = require('@playwright/test');

const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    retries: 2,
    timeout: 60000,
    reporter: 'allure-playwright',
    ignoreHTTPSErrors: true
  },
  projects: [{
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      },
    },
    {
      name: 'mobile-safari',
      use: {
        ...devices['iPhone 6']
      },
    },
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Galaxy S9+']
      },
    },
    {
      name: 'tablet-safari',
      ise: {
        ...devices['iPad Pro 11']
      }
    },
    {
      name: 'tablet-chrome',
      use: {
        ...devices['Nexus 10']
      },
    },
    {
      name: 'PL',
      use: {
        baseURL: 'https://www.znanylekarz.pl/'
      },
    },
    {
      name: 'ES',
      use: {
        baseURL: 'https://www.doctoralia.es'
      },
    },
  ],
};

module.exports = config;