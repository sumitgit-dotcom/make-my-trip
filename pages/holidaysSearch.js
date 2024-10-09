export class HolidaySearch {
    constructor(page) {
        this.page = page;
    }

    async goToHolidayPackages()
    {

        await this.page.goto('https://www.makemytrip.com/holidays-india/');
    }

    async fillHolidayForm()
    {
        await this.page.click('input[placeholder="From City"]');
        await this.page.fill('input[placeholder="From City"]', 'Bangalore');
        await this.page.waitForSelector('li[role="option"]:has-text("Bangalore, India")');
        await this.page.click('li[role="option"]:has-text("Bangalore, India")');
        
        await this.page.click('input[placeholder="To City/Country/Category"]');
        await this.page.fill('input[placeholder="To City/Country/Category"]', 'Goa');
        await this.page.waitForSelector('li[role="option"]:has-text("Goa, India")');
        await this.page.click('li[role="option"]:has-text("Goa, India")');

        await this.page.click('input[placeholder="Departure Date"]');
        await this.page.click('div[aria-label="Wed Nov 20 2024"]'); 

        await this.page.click('div:has-text("Rooms & Guests")');
        await this.page.selectOption('select[aria-label="Adults"]', '2');

        await this.page.click('div:has-text("Filters")');
        await this.page.click('span:has-text("₹25,000 - ₹35,000")');
        await this.page.click('span:has-text("4★")');

 }

 async performSearch()
 {
    await this.page.click('button:has-text("SEARCH")');
    await this.page.waitForNavigation();
    console.log('Search performed successfully, redirected to results page.');
 }
 async takeScreenshot()
 {
    await this.page.screenshot({ path: 'holiday_search_result.png', fullPage: true });
    console.log('Screenshot saved as holiday_search_result.png');
 }}

    