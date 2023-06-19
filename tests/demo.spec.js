import {test,expect} from '@playwright/test'
test('demo',async({page})=>{

    await page.goto('https://www.akasaair.com/')
    await page.pause()
    await page.locator('.MuiBackdrop-root').first().click();
  await page.getByRole('textbox', { name: 'From' }).click();
  await page.getByText('Ahmedabad').click();
  await page.getByRole('textbox', { name: 'To' }).click();
  await page.getByText('Bhubaneswar').click();
  await page.getByRole('button', { name: 'Choose date, selected date is Jun 16, 2023' }).click();
  await page.getByRole('gridcell', { name: '17' }).click();
  await page.getByRole('button', { name: 'Search Flights' }).click();
  await page.locator('div:nth-child(22) > .MuiBackdrop-root').click();


})