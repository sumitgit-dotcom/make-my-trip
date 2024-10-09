import { test, expect } from '@playwright/test';
import { SearchHotel } from '../../pages/SearchHotel';

test('Search for Hotels in Goa on MakeMyTrip', async ({ page }) => {
    const searchHotel = new SearchHotel(page);
    await searchHotel.goToHotelPage();
    await searchHotel.enterLocation('Goa');
    await searchHotel.selectFirstLocationSuggestion();

    await searchHotel.selectDates('2024-12-20', '2024-12-24');
    await searchHotel.selectGuests();
    await searchHotel.searchHotels();

    await searchHotel.verifySearchResults('Goa');
});