const { Given } = require('@wdio/cucumber-framework');
const ConfigurationPage = require('../pageobjects/configuration.page');
const SafetyPage = require('../pageobjects/safety.page');

Given(/I am on the car safety page/, async () => {
    await SafetyPage.open()
});

Given(/I am on the build page/, async () => {
    await ConfigurationPage.open()
});

Given(/^I click the button "([^"]*)"$/, async (text) => {
    const elem = await $('button*='+text)
    elem.click();
});

Given(/I choose an electric car/, async () => {
    await ConfigurationPage.selectElectricCar();
});

Given(/^I customise as below$/, async (table) => {
    await ConfigurationPage.customisation(table);
});