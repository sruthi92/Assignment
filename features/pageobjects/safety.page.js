const Page = require('./page');

class SafetyPage extends Page {
    /**
     * define selectors using getter methods
     */
    get navOurCarsMenu () {
        return $('//*[@id="nav:topNavCarMenu"]');
    }

    get navMenu () {
        return $('//*[@id="sitenav-sidenav-toggle"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        super.open('v/car-safety/a-million-more');

        const acceptCookies = await $('//*[@id="onetrust-accept-btn-handler"]')

        if (acceptCookies.isExisting()) {

            acceptCookies.click()
            
        }
    }
}

module.exports = new SafetyPage();
