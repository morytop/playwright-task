const {test} = require('@playwright/test');

test.afterEach(async ({ page }) => {
    await page.waitForResponse(response => response.status() === 200);
});

test.describe.parallel('Availability of Home Page', () => {
    test('check', async ({  page  }) => {
        await page.goto('https://www.znanylekarz.pl/');
    });
})