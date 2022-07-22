const Page = require('./page');

class ConfigurationPage extends Page {
    /**
     * define selectors using getter methods
     */

    get electricCar () {
        return $('button*=Electric');
    }   

    get c40RechargeCar () {
        return $('//*[@id="__next"]/div[4]/div/div/div[1]/div/a');
    }   

    get yourDesignGrid () {
        return $('//*[@id="__next"]/div[4]/div/div/div[1]/div/a');
    }  

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        super.open('build');

        const acceptCookies = await $('//*[@id="onetrust-accept-btn-handler"]')

        if (acceptCookies.isExisting()) {

            acceptCookies.click()
            
        }
    }

    async selectElectricCar () {
        await this.electricCar.click();
        console.log("Clicked Electric car button")

        this.c40RechargeCar.waitForClickable(10000);
        await this.c40RechargeCar.click();
        console.log("Clicked Electric car button")
    }

    customisation = async (table) => {

        const tableRow = table.hashes();

        for (const row of tableRow) {
    
            console.log(row.type)
            console.log(row.value)

            const elem = await $(row.type+'*='+row.value)
            await elem.scrollIntoView();

            elem.waitForClickable(10000);
            await elem.click();
    
        }     
    
    }
 
}

module.exports = new ConfigurationPage();