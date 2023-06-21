import { test, expect } from '@playwright/test'
export class Search_Flight {

    constructor(page) {

        this.page=page
        this.select_flight = page.locator('#destinationsAccordion0 > div.MuiButtonBase-root.MuiAccordionSummary-root.MuiAccordionSummary-gutters.css-1iji0d4 > div > span > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > button')
        this.Continue_button = page.locator('#__next > div > div.ComponentName_page > main > div.ComponentName_availableFlights > div > div.CalenderStrip_footer__tDjmd.MuiBox-root.css-1i11ky1 > button')
        this.ChooseNo=page.locator('body > div.MuiDialog-root.popup_border.fareSummeryBlock.max-w-full.sm\:max-w-120.MuiModal-root.css-126xj0f > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div > div.sm\:text-center.mt-3.MuiBox-root.css-0 > button')
    }
async SelectFlight(){

    //await this.page.pause()
    
    await this.select_flight.click()
    
    await this.Continue_button.click()
    //await this.ChooseNo.click()


}
}
