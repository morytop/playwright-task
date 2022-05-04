exports.PlaywrightHomePage = class PlaywrightDevPage {

    constructor(page) {
        this.page = page;
        this.cookieBannerButton = '#onetrust-accept-btn-handler';
    }

    async acceptCookies() {
        await this.page.click(this.cookieBannerButton);
    }
}