const locators = require('../../pages/locator.js');
const config = require('../../pages/config.js');
var faker = require('faker');
Feature('Environment Setup');

Scenario('@environmentSetup woocommerce dependencies', ({ I,loginAs}) => {
  loginAs('admin');
      //Add shipping
      I.amOnPage('/wp-admin/admin.php?page=wc-settings');
      I.wait(3);
      I.scrollTo('#woocommerce_allowed_countries');
      I.selectOption('#woocommerce_allowed_countries','Sell to all countries');
      I.selectOption('#woocommerce_ship_to_countries','Ship to all countries you sell to');
      I.click({css:'#mainform > p > button'});
      I.seeElementInDOM({css:'#message > p'});
      I.see('Your settings have been saved.');
      I.click('Shipping');
      I.click('Add shipping zone');
      I.fillField('#zone_name','United States');
      I.click({css:'#mainform > table > tbody > tr:nth-child(2) > td > span > span.selection > span > ul > li > input'});
      I.type('United States (US)');
      I.wait(3);
      I.pressKey('Enter');
      I.click({css:'#mainform > table > tbody > tr:nth-child(3) > td > table > tfoot > tr > td > button'});
      I.click({css:'#btn-ok'});
      I.wait(5);
      I.refreshPage();
      //Add TAX
      I.amOnPage('/wp-admin/admin.php?page=wc-settings');
      I.checkOption('#woocommerce_calc_taxes');
      I.click("Save changes");
      I.see('Your settings have been saved.');
      I.wait(5);
      I.click('Tax');
      I.click('Standard rates');
      I.click('Insert row');
      I.fillField('//td[5]/input', faker.random.arrayElement(['6', '7', '5']));
      I.click('Save changes');
      I.wait(5);
      I.click('Dokan');
      I.wait(3);
      I.click('Settings');
      I.click('Selling Options');
      I.selectOption('dokan_selling[tax_fee_recipient]', faker.random.arrayElement(['Vendor', 'Admin']));
      I.click('#dokan_selling #submit');
      I.waitForElement('.metabox-holder', 30);
});