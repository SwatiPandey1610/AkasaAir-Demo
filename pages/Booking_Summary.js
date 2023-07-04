import { test, expect } from '@playwright/test'
const dataset = JSON.parse(JSON.stringify(require("../test-data/Passenger_Details.json")))
export class Booking_Summary {

    constructor(page) {

        this.page = page;
        this.passengerName = page.locator('p:has-text("swati pandey")');
        this.passengerMobileNo = page.locator('input[value="91-9494934343"]');
        this.passengerEmailId = page.locator('input[value="swati.pandey@xperforce.com"]');
    }

    async BookingSummary() {

        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState('networkidle');

        await this.page.waitForSelector('p:has-text("swati pandey")');
        const name = await this.passengerName.textContent();
        console.log('Name:', name);
        await expect.soft(name).toEqual(dataset.FirstName + ' ' + dataset.LastName);

        await this.page.waitForSelector('input[value="91-9494934343"]');
        const mobnum = await this.passengerMobileNo.getAttribute('value');
        console.log('Mobile Number:', mobnum);
        await expect.soft(mobnum).toEqual(dataset.MobileNumber);

        await this.page.waitForSelector('input[value="swati.pandey@xperforce.com"]');
        const email = await this.passengerEmailId.getAttribute('value');
        console.log('Email:', email);
        await expect.soft(email).toEqual(dataset.Emailid);


    }
}