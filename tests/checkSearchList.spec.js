const { test, expect } = require('@playwright/test');
const { PlaywrightSearchPage } = require('../helpers/searchPage')

test.describe('Check search list', () => {
    test('search doctor on PL site', async ({ page }) => {
       const helper = new PlaywrightSearchPage(page);
       await helper.search();

        const elements = [
            'data-test-id=search-list',
            'data-test-id=listing-pagination',
            'data-test-id=navbar',
            'data-test-id=online_only-dropdown',
            'data-test-id=availability-dropdown',
            'data-test-id=languages-dropdown',
            'data-test-id=kids_friendly-dropdown',
            'data-test-id=all-filters-btn',
        ];
        for (const element of elements) {
            await test.step(`Visibility of: ${element}`, async () =>{
                let el = page.locator(element);
                await expect(el).toBeVisible();
            })
        }
        const headline = page.locator('data-test-id=search-headline');
        await expect(headline).toContainText('Ginekolog, Warszawa');
        
        const doctorCards = page.locator('data-test-id=result-item');
        const count = await doctorCards.count();
        for (let i = 0; i < count; i++) {
        await doctorCards.nth(i).toBeVisible;
        }
      });
})