const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://rinky.ajaira.website',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Dokan_automation_stage_1',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'loginAs',
      users: {
          admin: {
            login: (I) => {
              I.amOnPage("/login");
              I.fillField('Username','rinky');
              I.fillField('Password', 'rinky@129!9#wedevs@2021');
              I.checkOption('Remember Me');
              I.click('Log In');
            },
            check: (I) => {
              I.seeCurrentUrlEquals('/wp-admin/');
            },
          },  
      },
    }
  }
}