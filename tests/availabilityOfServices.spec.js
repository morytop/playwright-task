const {test} = require('@playwright/test');

test.afterEach(async ({ page }) => {
    await page.waitForResponse(response => response.status() === 200);
});

test.describe.parallel('Availability of Home Page', () => {
    test('check PL', async ({  page  }) => {
        await page.goto(process.env.PL_HOMEPAGE_URL);
        await page.waitForURL(process.env.PL_HOMEPAGE_URL);
    });
    test('check ES', async ({  page  }) => {
        await page.goto(process.env.ES_HOMEPAGE_URL);
        await page.waitForURL(process.env.ES_HOMEPAGE_URL);
    });
})