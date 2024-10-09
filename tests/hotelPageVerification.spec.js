import { test } from '@playwright/test';
import { HotelPageVerification } from '../../pages/HotelPageVerification';

test('Verify all hotel information on the listing page is displayed correctly', async ({ page }) => {
    const hotelPageVerification = new HotelPageVerification(page);
    await hotelPageVerification.goToHotelPage();
    await hotelPageVerification.verifyHotelInformation();
});