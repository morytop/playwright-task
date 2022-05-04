const {test} = require('@playwright/test');

test.describe('Search Doctor using data from endpoint', () => {
    test('on PL site', async ({ page, request }) => {
      await page.goto(process.env.PL_HOMEPAGE_URL);
      await page.click('#onetrust-accept-btn-handler');

      const _response = await request.get(process.env.API_DATA_URL);
      const apiData = await _response.json();
      const specInput = apiData.hits[0].data.searchData.specialization
      const cityInput = apiData.hits[0].data.searchData.city

      await page.fill('[data-id="autocomplete-search"]', `${specInput}`);
      await page.fill('[data-id="autocomplete-location"]', `${cityInput}`);
      await page.click('.search-button');
      await page.waitForResponse(response => response.status() === 200);
    });
    
    test('on ES site', async ({ page, request }) => {
      await page.goto(process.env.ES_HOMEPAGE_URL);
      await page.click('#onetrust-accept-btn-handler');

      const _response = await request.get(process.env.API_DATA_URL);
      const apiData = await _response.json();
      const specInput = apiData.hits[1].data.searchData.specialization
      const cityInput = apiData.hits[1].data.searchData.city

      await page.fill('[data-id="autocomplete-search"]', `${specInput}`);
      await page.fill('[data-id="autocomplete-location"]', `${cityInput}`);
      await page.click('.search-button');
      await page.waitForResponse(response => response.status() === 200);
    });
})