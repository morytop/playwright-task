const { test, expect } = require('@playwright/test');
const { PlaywrightSearchPage } = require('../helpers/searchPage')

test.describe('Select from any calendar free slot and check if booking page is loaded properly ', () => {
    test('Search doctor', async ({page}) =>{
        const helper = new PlaywrightSearchPage(page);
        await helper.search();
        
        await page.click('button[data-controls="next"]');
        await page.click('//button[contains(@class,"calendar-slot-available")]');

        const elements = [
            'data-test-id=app-logo',
            'data-test-id=booking-form-step',
            'data-test-id=form-title',
            'data-test-id=who-is-patient-header',
            'data-test-id=for-myself-button',
            'data-test-id=for-someone-else-button',
            'data-test-id=booking-next-step-button',
            'data-test-id=doctor-card',
        ];
        for (const element of elements) {
            await test.step(`Visibility of: ${element}`, async () =>{
                let el = page.locator(element);
                await expect(el).toBeVisible();
            })
        }
        
    })
})