exports.PlaywrightSearchPage = class PlaywrightDevPage {

    constructor(page) {
        this.page = page;
    }

    async search(){
      await this.page.goto(process.env.PL_HOMEPAGE_URL);
      await this.page.click('#onetrust-accept-btn-handler');
      await this.page.fill('[data-id="autocomplete-search"]', 'Ginekolog');
      await this.page.fill('[data-id="autocomplete-location"]', 'Warszawa');
      await this.page.click('.search-button');
      await this.page.waitForResponse(response => response.status() === 200);
    }
}