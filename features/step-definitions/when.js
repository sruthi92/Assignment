const { When } = require('@wdio/cucumber-framework');

const SafetyPage = require('../pageobjects/safety.page');

When(/^I click the button "([^"]*)"$/, async (text) => {
    const elem = await $('button*='+text)

    await elem.click()
});