import { test, expect, Page } from '@playwright/test';
import { Book_Flight } from '../pages/Book_Flight.spec'
import { Search_Flight } from '../pages/Search_Flight.spec'
import { PassengerDetails } from '../pages/Passenger_details.spec'
import { Booking_Summary } from '../pages/Booking_Summary'

test.describe('Book Flight', async () => {

    let page = Page
        / test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });

    test('home Page', async () => {

        await page.goto('https://www.akasaair.com/')
        await page.waitForURL('https://www.akasaair.com/')
    })

    test('Book Flight', async () => {

        const Book_Flights = new Book_Flight(page)
        await Book_Flights.flightBooking()

    })

    test('Select Flight', async () => {

        const SearchFlight = new Search_Flight(page)
        await SearchFlight.SelectFlight()


    })
    test('Passenger Details', async () => {

        const PassengerDetail = new PassengerDetails(page)
        await PassengerDetail.AddPassengerDetails()


    })
    test('Booking Summary', async () => {


        const BookingSummary1 = new Booking_Summary(page)
       await BookingSummary1.BookingSummary()

    })

});

