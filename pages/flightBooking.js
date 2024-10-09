export class FlightBooking {
    constructor(page) {
      this.page = page;
    }

    async goToSearchResultsPage()
    {
        await this.page.goto('https://www.makemytrip.com/flight/search?itinerary=DEL-NYC-05/11/2024&tripType=O&paxType=A-2_C-0_I-0&intl=true&cabinClass=E&ccde=IN&lang=eng');
    }
    async filterNonStopFlights()
    {
        await this.page.waitForSelector('label[for="filter_stop_nonStop"]');
        await this.page.click('label[for="filter_stop_nonStop"]');
    }
    async selectEtihadAirways()
    {
        await this.page.waitForSelector('span:has-text("Etihad Airways")', { timeout: 10000 });
        await this.page.click('span:has-text("Etihad Airways")');
    }
    async clickViewPrices()
    {
        await this.page.waitForSelector('button:has-text("View Prices")');
        await this.page.click('button:has-text("View Prices")');
    }
    async selectEconomyValue()
    {
        await this.page.waitForSelector('div:has-text("Economy Value")');
        await this.page.click('div:has-text("Economy Value")');
    }
    async clickLockNow()
    {
        await this.page.waitForSelector('button:has-text("Lock Now")');
        await this.page.click('button:has-text("Lock Now")');
    }
    }
