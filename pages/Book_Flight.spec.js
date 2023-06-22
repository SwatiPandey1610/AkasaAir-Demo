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
        this.datepicker = page.locator('#__next > div > div.ComponentName_page > main > div:nth-child(3) > div > div > div > div.searchpanel_searchPanel_body__J_yLE.MuiBox-root.css-0 > div > form > div.Booking_search_upper__KAojo.MuiBox-root.css-0 > div.datepicker.MuiBox-root.css-0 > div > div > div > div > button > svg')
        this.pickdate = page.locator('body > div.MuiPickersPopper-root.css-1mtsuo7.MuiPopperUnstyled-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPickersPopper-paper.css-a9rw36 > div > div > div > div.MuiPickersFadeTransitionGroup-root.MuiCalendarPicker-viewTransitionContainer.css-1h73gvd > div > div > div.PrivatePickersSlideTransition-root.MuiDayPicker-slideTransition.css-1cnkspq > div > div:nth-child(4) > div:nth-child(7) > button')
        //this.departure_date = page.getByRole('textbox', { name: 'Departure date' })
        //this.selectDate=page.getByRole('gridcell', { name: '17' })
        this.search_flight_button = page.getByRole('button', { name: 'Search Flights' })

    }

    async flightBooking() {
        
       
        //await this.page.pause()
       await this.acceptcookie.click()
       
        await this.flight_from_dropdown.click()
        await this.selectFlightFrom.click()
        await this.flight_to_dropdown.click()
        await this.selectFlightto.click()
       // await this.departure_date.click()
        await this.datepicker.click()
       await this.pickdate.click()
       //await this.departure_date.press('Control+a')
       // await this.departure_date.press('Control+x')
       // await this.departure_date.fill(dataset.Departure_Date)
       // await this.departure_date.click()
        await this.search_flight_button.click()
       await this.page.waitForURL('https://www.akasaair.com/flight-search')


    }

}

