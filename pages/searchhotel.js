export class SearchHotel {
    constructor(page) {
      this.page = page;
    }

    async goToHotelPage() 
    {
        await this.page.goto('https://www.makemytrip.com/hotels/');
    }
    async enterLocation(location) 
    {

        await this.page.click('input[placeholder="Enter city/ Hotel/ Area/ Building"]');
        await this.page.fill('input[placeholder="Enter city/ Hotel/ Area/ Building"]', location);
    }
    async selectFirstLocationSuggestion()
    {

        await this.page.waitForSelector('.react-autosuggest__suggestion:first-child', { timeout: 5000 });
        await this.page.click('.react-autosuggest__suggestion:first-child');
     }

     async selectDates(checkInDate, checkOutDate)
     {
        await this.page.click('input[id="checkin"]');
        await this.page.click(`td[data-date="${checkInDate}"]`);
        await this.page.click(`td[data-date="${checkOutDate}"]`);
     }
     async selectGuests()
     {
        await this.page.click('input[id="guest"]');
        await this.page.selectOption('select[title="Adults"]', '2');

     }
     async searchHotels()
     {
        await this.page.click('button:has-text("Search")');
     }
     async verifySearchResults(location) 
     {
        await this.page.waitForSelector('text=' + location);
        await expect(this.page).toHaveText(location);
     }
    }