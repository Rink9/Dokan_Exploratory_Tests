require('dotenv').config()
const env = require('./env');
exports.config = {

    tests: 'core-tests/**/*_test.js',

    output: './output',
    helpers: {
        WebDriver: {
            browser: 'chrome',
            smartWait: 5000,
            windowSize: "maximize",
            desiredCapabilities: {
                // chromeOptions: {
                //     args: ["--headless","--window-size=1200,1600", "--disable-gpu", "--no-sandbox"]
                // }

            },
        },
    },
    include: {
        I: './steps_file.js',
        helpers: './pages/helpers.js',
        
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: [
            './step_definitions/simpleProduct.js',
        ]
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true
        },
        tryTo: {
            enabled: true
        },
        allure: {
            enabled: true
        },
        autoDelay: {
            enabled: true
        },
        autoLogin: {
            enabled: true,
            saveToFile: false,
            inject: 'loginAs',
            users: {
                admin: {
                    login: (I) => {
                        I.amOnPage('/wp-admin/');
                        I.fillField('#user_login', 'username');
                        I.fillField('#user_pass', 'password');
                        I.click('Log In');
                    },
                    check: (I) => {
                        I.seeCurrentUrlEquals('/wp-admin/');
                    },
                },
                
            }
        },
    }

}
