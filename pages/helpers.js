var Factory = require('rosie').Factory;
var faker = require('faker');
const locator = require('./locator');

const { I, loginAs } = inject();

module.exports = {

    addProductTag(){
        I.amOnPage('/wp-admin/edit-tags.php?taxonomy=product_tag&post_type=product');
        I.fillField('//*[@id="tag-name"]',faker.commerce.productName());
        I.click('//*[@id="submit"]');
    },
    addProductCatagory(){
        I.amOnPage('/wp-admin/edit-tags.php?taxonomy=category');
        I.fillField('//*[@id="tag-name"]', faker.commerce.productName());
        I.click('submit');
    },
    savePermalink(){
        I.amOnPage('/wp-admin/options-permalink.php');
        I.checkOption('//*[@id="wpbody-content"]//tr[5]/th/label/input');
        I.click('//*[@id="submit"]');
    },
    
};