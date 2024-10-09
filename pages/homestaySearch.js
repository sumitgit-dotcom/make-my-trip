export class HomestaySearch {
    constructor(page) {
        this.page = page;
    }

    async goToHomestayPage()
    {
        await this.page.goto('https://www.makemytrip.com/homestays/');
    }

    async fillHomestayForm()
    {
        await this.page.fill('input[placeholder="City, Property Name Or Location"]', 'Shimla');
        await this.page.waitForSelector('li[role="option"]:has-text("Shimla, India")');
        await this.page.click('li[role="option"]:has-text("Shimla, India")');

        await this.page.click('input[placeholder="Check-In"]');
        await this.page.click('div[aria-label="Thu Oct 10 2024"]');

        await this.page.click('input[placeholder="Check-Out"]');
        await this.page.click('div[aria-label="Tue Nov 12 2024"]'); 

        await this.page.click('div:has-text("Guests")');
        await this.page.selectOption('select[aria-label="Adults"]', '2');

        await this.page.click('div:has-text("Price Per Night")');
        await this.page.click('span:has-text("₹2500 - ₹5000")');
    }
    async performSearch()
    {
        await this.page.click('button:has-text("SEARCH")');
        await this.page.waitForNavigation();
        console.log('Search performed successfully and navigated to the results page.');
    }}