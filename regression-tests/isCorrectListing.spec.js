const { test, expect } = require('@playwright/test');

test.describe.parallel('Availability of Listing', () => {
    test('check', async ({  page  }) => {
        await page.goto('https://www.znanylekarz.pl/szukaj?q=ginekolog&loc=Gda%C5%84sk&filters%5Bspecializations%5D%5B%5D=57');
        await page.waitForResponse(response => response.status() === 200);
    });
})

test.describe('Testing of listing', () => {

    test('test', async ({page}) => {

        await test.step('Step 0: Go to page', async () => {
            await page.goto('https://www.znanylekarz.pl/szukaj?q=ginekolog&loc=Gda%C5%84sk&filters%5Bspecializations%5D%5B%5D=57')
        });

        await test.step('Step 1: Check availability', async () => {
            await page.waitForResponse(response => response.status() === 200);
        });

        await test.step('Step 2: Check text in header', async () => {
            const title = page.locator('[data-test-id=search-headline]');
            await expect(title).toHaveText('Ginekolog, Gdańsk');
        });
    
        await test.step('Step 3: Select Calendar', async () => {
            await page.click('.dp-carousel-nav.dp-carousel-nav-next');
            await page.click('text=Zobacz wolne terminy');
        });

    })    
})