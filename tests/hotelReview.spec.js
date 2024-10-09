import { test, expect } from '@playwright/test';
import { HotelReview } from '../../pages/HotelReview';

test('Verify review page details and fill in guest names', async ({ page }) => {
    const hotelReview = new HotelReview(page);

    await page.goto('https://www.makemytrip.com/hotels/hotel-review?_uCurrency=INR&checkin=12202024&checkout=12212024&city=CTGOI&country=IN&filterData=STAR_RATING%7C5%5EHOTEL_PRICE_BUCKET%7C4000-8000&hotelId=200712031843391288&lat=15.57115&lng=73.75942&locusId=CTGOI&locusType=city&mtKey=-1288577831752802961&mtkeys=-1288577831752802961&payMode=PAS&rank=1&regionNearByExp=3&roomCriteria=27283~%7C~-1288577831752802961~%7C~2e0e&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Goa&searchType=E&suppDetail=');
    await hotelReview.verifyReviewPageDetails();

    const guest1Name = 'John Doe';
    const guest2Name = 'Jane Doe';
    await hotelReview.fillGuestNames(guest1Name, guest2Name);

    await hotelReview.submitReviewForm();

});