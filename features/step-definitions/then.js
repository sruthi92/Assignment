const { Then } = require('@wdio/cucumber-framework');

const SafetyPage = require('../pageobjects/safety.page');
const ConfigurationPage = require('../pageobjects/configuration.page');

Then(/^I should see the button "([^"]*)"$/, async (text) => {
    const elem = await $('button*='+text)
    await expect(elem).toBeExisting();
});


Then(/^I should see the following elements$/, async (table) => {
    const tableRow = table.hashes();

    for (const row of tableRow) {

        console.log(row.type)
        console.log(row.text)
        
        const elem = await $(row.type+'*='+row.text)
        await expect(elem).toBeExisting();

    }
});

Then(/^I should see the heading "([^"]*)"$/, async (text) => {
    const elem = await $('h1*='+text)
    await expect(elem).toBeExisting();
});

Then(/^I should see the below customisation$/, async (table) => {
    const tableRow = table.hashes();

    ConfigurationPage.yourDesignGrid.scrollIntoView();

    for (const row of tableRow) {
        console.log(row.type)
        console.log(row.value)

        const elem = await $('p*='+row.value)
        await expect(elem).toBeExisting();
    }     
});
