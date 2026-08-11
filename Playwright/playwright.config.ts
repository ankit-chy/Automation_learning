import { defineConfig, devices } from '@playwright/test';


const config =  ({
  testDir: './tests',

  timeout: 30 * 1000, // timeout for each step/test

    expect: {
    timeout: 5000 // timeout for each expect assertion
  },
  
  reporter: 'html', // generate HTML report after test execution

  use: {

    browserName: 'chromium',

  },
});


module.exports = config;