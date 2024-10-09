export class SearchHotel {
    constructor(page) {
      this.page = page;
    }
    async goToFilteredHotelPage()
    {
        await this.page.goto('https://www.makemytrip.com/hotels/hotel-listing/?_uCurrency=INR&checkin=12202024&checkout=12212024&city=CTGOI&country=IN&filterData=STAR_RATING%7C5%5EHOTEL_PRICE_BUCKET%7C4000-8000&locusId=CTGOI&locusType=city&regionNearByExp=3&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Goa');

    }

    async selectFirstProperty()
    {

        await this.page.waitForSelector('.listingRowOuter:first-child');
        await this.page.click('.listingRowOuter:first-child'); 
    }
    async getHotelDetails()
    {
        await this.page.waitForSelector('.hotelName');
        const hotelName = await this.page.textContent('.hotelName');
        const hotelRating = await this.page.textContent('.rating');
        const hotelPrice = await this.page.textContent('.priceInfo');
        const hotelLocation = await this.page.textContent('.locationDetails');

        const amenities = await this.page.evaluate(() => {
            return Array.from(document.querySelectorAll('.amenities li'))
                .map(el => el.textContent)
                .join(', ');
        });

        return `Hotel Name: ${hotelName}\nRating: ${hotelRating}\nPrice: ${hotelPrice}\nLocation: ${hotelLocation}\nAmenities: ${amenities}`;
    } 
    }