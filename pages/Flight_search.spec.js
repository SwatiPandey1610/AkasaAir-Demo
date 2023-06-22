import { test, expect } from '@playwright/test'
export class Search_Flight {

    constructor(page) {

        this.page=page
        this.select_flight = page.locator('#destinationsAccordion0 > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-1iji0d4 > div > span > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > button')
        this.Continue_button = page.locator('#__next > div > div.ComponentName_page > main > div.ComponentName_availableFlights > div > div.CalenderStrip_footer__tDjmd.MuiBox-root.css-1i11ky1 > button')
        this.ChooseNo=page.locator('//body/div[8]/div[3]/div[1]/div[1]/div[4]/button[1]')
    }

    async SelectFlight(){

    //await this.page.pause()
    
    await this.select_flight.click()
    
    await this.Continue_button.click()
    await this.ChooseNo.click()
    await this.page.waitForURL('https://www.akasaair.com/booking')


}
}
