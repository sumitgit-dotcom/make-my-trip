import { test, expect } from '@playwright/test';
import { HotelBooking } from '../../pages/HotelBooking';

test('Click Book Now button and verify redirection to the booking page', async ({ page }) => {
    const hotelBooking = new HotelBooking(page);

    await page.goto('https://www.makemytrip.com/hotels/hotel-details/?hotelId=200712031843391288&_uCurrency=INR&checkin=12202024&checkout=12212024&city=CTGOI&country=IN&filterData=STAR_RATING%7C5%5EHOTEL_PRICE_BUCKET%7C4000-8000&lat=15.57115&lng=73.75942&locusId=CTGOI&locusType=city&rank=1&regionNearByExp=3&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Goa&mtkeys=-1288577831752802961');
    await hotelBooking.clickBookNowButton();
    await hotelBooking.verifyBookingPage();

});
