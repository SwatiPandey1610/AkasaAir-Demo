import { test, expect } from '@playwright/test'
const dataset = JSON.parse(JSON.stringify(require("../test-data/Passenger_Details.json")))
export class PassengerDetails {

    constructor(page) {
        this.page = page
        this.firstname_textbox = page.locator('#mui-70')
        this.lastname_testbox = page.locator('#mui-71')
        this.selectgender_dropdown = page.locator('#demo-simple-select')
        this.gendermale = page.locator('//*[@id="menu-"]/div[3]/ul/li[1]')
        this.genderfemale = page.locator('//*[@id="menu-"]/div[3]/ul/li[2]')
        this.MobileNumber = page.locator('//*[@id="__next"]/div/div[1]/main/div[3]/div/div/div/div/div[3]/div/form/div/div/div[4]/form/div[1]/div[1]/div[1]/input')
        this.emailid = page.locator('//*[@id="mui-72"]')
        this.continue_button = page.locator('#__next > div > div.ComponentName_page > main > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > div.passengerBookingJourney_stepper_footer__EfxrO.MuiBox-root.css-0 > div > div.w_Full.MuiBox-root.css-0 > button')
        this.skipaddon = page.locator('//*[@id="__next"]/div/div[1]/main/div[3]/div/div/div/div/div[3]/div/div[2]/div/button')
        this.skipseat = page.locator('//*[@id="__next"]/div/div[1]/main/div[3]/div/div/div/div/div[3]/div/div[2]/div/button[2]/span[1]')
    }

    async AddPassengerDetails() {

        await this.page.pause()
        await this.firstname_textbox.click()
        await this.firstname_textbox.fill(dataset.FirstName)
        await this.lastname_testbox.click()
        await this.lastname_testbox.fill(dataset.LastName)
        await this.selectgender_dropdown.click()
        await this.genderfemale.click()
        await this.MobileNumber.click()
        await this.MobileNumber.fill(dataset.MobileNumber)
        await this.emailid.click()
        await this.emailid.fill(dataset.Emailid)
        await this.continue_button.click()
        await this.skipaddon.click()
        await this.skipseat.click()

    }

}