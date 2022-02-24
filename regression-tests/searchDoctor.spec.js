/*const {test} = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.znanylekarz.pl');
    await page.click('.onetrust-accept-btn-handler');
});

test('Search Doctor', async ({ page }) => {

    await page.fill('[placeholder="specjalizacja lub nazwisko"]', 'Ginekolog');
    await page.fill('[placeholder="miasto lub dzielnica"]', 'Gdańsk');
    await page.click('.search-button btn btn-lg btn-block btn-primary');
    await expect(page).toHaveURL('https://www.znanylekarz.pl/szukaj?q=ginekolog&loc=Gda%C5%84sk&filters%5Bspecializations%5D%5B%5D=57');

    
    
  
  }); 
  
  */

  const {test} = require('@playwright/test');

test('Search Doctor', async ({ page }) => {
  await page.goto('https://www.znanylekarz.pl/');
  await page.click('button:has-text("Zaakceptuj")');
  await page.fill('[placeholder="specjalizacja lub nazwisko"]', 'Ginekolog');
  await page.fill('[placeholder="miasto lub dzielnica"]', 'Gdańsk');
  await page.click('button:has-text("Szukaj")');
  //const locator = page.locator('[data-test-id=search-headline]');
 // await expect(locator).toHaveText('Ginekolog, Gdańsk');

});