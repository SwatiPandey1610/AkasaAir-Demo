import { test, expect } from '@playwright/test'
const dataset = JSON.parse(JSON.stringify(require("../test-data/Book_Flight_Data.json")))
export class Book_Flight {

    constructor(page) {

        this.page = page
        this.acceptcookie = page.locator('text=Yes, I agree')
        //this.firstclick = page.locator('.MuiBackdrop-root')
        this.flight_from_dropdown = page.getByRole('textbox', { name: 'From' })
        this.selectFlightFrom = page.getByText(dataset.from, { exact: true })
        this.flight_to_dropdown = page.getByRole('textbox', { name: 'To' })
        this.selectFlightto = page.getByText(dataset.to)
        this.departure_date = page.getByRole('textbox', { name: 'Departure date' })
        //this.selectDate=page.getByRole('gridcell', { name: '17' })
        this.search_flight_button = page.getByRole('button', { name: 'Search Flights' })

    }

    async flightBooking() {
        
       await this.page.pause()
       await this.acceptcookie.click()
       // await this.firstclick.first().click()
        await this.flight_from_dropdown.click()
        await this.selectFlightFrom.click()
        await this.flight_to_dropdown.click()
        await this.selectFlightto.click()
        await this.departure_date.click()
        await this.departure_date.press('Control+a')
        await this.departure_date.press('Control+x')
        await this.departure_date.fill(dataset.departure_date)
        //await this.selectDate.click()
        await this.search_flight_button.click()


    }

}

