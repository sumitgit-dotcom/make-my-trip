export class SearchFlight {
    constructor(page) {
      this.page = page;
    }

    async goToFlightPage()
    {

        await this.page.goto('https://www.makemytrip.com/');
    }

    async enterFlightDetails()
    {
        await this.page.click('li[data-cy="menu_Flights"]');
        await this.page.click('label[for="switch__input_1"]');
        await this.page.click('input[placeholder="From"]');
        await this.page.fill('input[placeholder="From"]', 'Delhi');
        await this.page.click('p:has-text("Delhi, India")');

        await this.page.click('input[placeholder="To"]');
        await this.page.fill('input[placeholder="To"]', 'New York');
        await this.page.click('p:has-text("New York, USA")');

        await this.page.click('label[for="departure"]');
        await this.page.click('div[aria-label="Thu Nov 02 2024"]');

        await this.page.click('label[for="travellers"]');
        await this.page.click('li[data-cy="adults-2"]');
        await this.page.click('button[data-cy="travellers-done-cta"]');

    }
    async searchFlight() 
    {
        await this.page.click('a.primaryBtn.font24.latoBold.widgetSearchBtn');
    }

    async verifySearchResults()
    {
        await this.page.waitForSelector('div:has-text("Delhi to New York")', { timeout: 10000 });
        await this.page.waitForSelector('div:has-text("2 Nov 2024")');
    }}


        
