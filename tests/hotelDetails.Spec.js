import { test, expect } from '@playwright/test';
import { SearchHotel } from '../../pages/SearchHotel';
import fs from 'fs';

test('Filter and Fetch Details of First 5-Star Property in Goa', async ({ page }) => {
    const searchHotel = new SearchHotel(page);

    await searchHotel.goToFilteredHotelPage();
    await searchHotel.selectFirstProperty();

    fs.writeFileSync('hotelDetails.txt', hotelDetails);
    console.log('Hotel details successfully saved to hotelDetails.txt');
});
    