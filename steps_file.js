var faker = require('faker');

module.exports = function() {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.
        checkError: function() {
            this.dontSee('Warning');
            this.dontSee('Fatal error');
            this.dontSee('Notice:');
        },
        registrationAsCustomer: function() {
            this.amOnPage('/my-account/');
            this.fillField('Email address', faker.internet.email());
            this.fillField('#reg_password', faker.internet.password());
            this.checkOption('I am a customer');
            this.click('Register');
            this.seeInCurrentUrl('/my-account');
        },

    });
}