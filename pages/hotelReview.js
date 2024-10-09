export class HotelReview {
    constructor(page) {
        this.page = page;
    }

    async verifyReviewPageDetails()
    {

        await this.page.waitForSelector('.review-page-details');

        const hotelName = await this.page.textContent('.hotel-name');
        console.log('Hotel Name:', hotelName);

        const checkInDate = await this.page.textContent('.checkin-date');
        const checkOutDate = await this.page.textContent('.checkout-date');
        console.log('Check-In Date:', checkInDate);
        console.log('Check-Out Date:', checkOutDate);
        const totalPrice = await this.page.textContent('.total-price');
        console.log('Total Price:', totalPrice);

        const roomType = await this.page.textContent('.room-type');
        console.log('Room Type:', roomType);

        const additionalInfo = await this.page.textContent('.additional-info');
        console.log('Additional Info:', additionalInfo);


    }

    async fillGuestNames(guest1Name, guest2Name)
    {

        await this.page.fill('input[name="guest1"]', guest1Name);
        await this.page.fill('input[name="guest2"]', guest2Name);

        console.log(`Guest 1: ${guest1Name}`);
        console.log(`Guest 2: ${guest2Name}`);
    }

    async submitReviewForm()
    {

        await this.page.click('button:has-text("Submit")');
        await this.page.waitForNavigation();
        console.log('Guest details submitted successfully.');
    }
    }