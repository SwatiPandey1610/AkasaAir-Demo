import {test,expect} from '@playwright/test'
import { Book_Flight} from '../pages/Book_Flight.spec'

test('Book a Flight',async({page})=>{

   // await page.pause()

    await page.goto('https://www.akasaair.com/')
    await page.waitForURL('https://www.akasaair.com/')
    const Book_Flights = new Book_Flight(page)
    await Book_Flights.flightBooking()

})