import { test, expect } from '@playwright/test'
//const dataset = JSON.parse(JSON.stringify(require("../test-data/Book_Flight_Data.json")))
const dataset = JSON.parse(JSON.stringify(require("../test-data/Passenger_Details.json")))
export class Booking_Summary{

    constructor(page){

        this.page = page
        this.passengername=page.locator('//p[contains(text(),"Swati Pandey")]')
        this.passengerMobileNo= page.locator('//input[@class="MuiInputBase-input MuiInput-input Mui-disabled css-mnn31" and @value="91-9494934343"]')
        this.passengerEmailid= page.locator('//input[@class="MuiInputBase-input MuiInput-input Mui-disabled css-mnn31" and @value="swati.pandey@xperforce.com"]')
    }

    async BookingSummary(){

        await this.page.locator('//input[@class="MuiInputBase-input MuiInput-input Mui-disabled css-mnn31" and @value="91-9494934343"]').toBeVisible();

       const element= await this.page.$('//input[@class="MuiInputBase-input MuiInput-input Mui-disabled css-mnn31" and @value="91-9494934343"]')
       let text= (await element.innerText()).valueOf()
       console.log('Element text:', text)
        //let val=(await this.passengername.innerText()).valueOf()
       // await expect.soft(val).toBe(dataset.FirstName+' '+dataset.LastName)
      //  console.log(val)
        /*let MobNumber=(await this.passengerMobileNo.innerText()).valueOf()
        console.log(MobNumber)
        expect.soft(MobNumber).toContainText(dataset.MobileNumber)
        
        let email=(await this.passengerEmailid.innerText()).valueOf()
        console.log(email)
        expect.soft(email).toContainText(dataset.Emailid)*/
        

     
    }
}