export class HotelBooking {
    constructor(page) {
        this.page = page;
    }

    async clickBookNowButton()
    {
        await this.page.waitForSelector('button:has-text("Book Now")');
            await this.page.click('button:has-text("Book Now")');
            await this.page.waitForNavigation();
    }

    async verifyBookingPage() 
    {

        const url = this.page.url();
        if (url.includes('hotel-details') && url.includes('book'))
        {
            console.log('Successfully navigated to the booking page.');
        }
        else 
        {

            throw new Error('Failed to navigate to the booking page.');
        }
    }}