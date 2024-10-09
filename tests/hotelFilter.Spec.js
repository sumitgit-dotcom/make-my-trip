import { test, expect } from '@playwright/test';
import { SearchHotel } from '../../pages/SearchHotel';

test('Filter 5-Star Resorts in Goa with Price Range ₹4000-₹8000 and Excellent Rating', async ({ page }) => {
    const searchHotel = new SearchHotel(page);

    await searchHotel.goToFilteredHotelPage();
    await searchHotel.selectStarRating(5);

    await searchHotel.selectPriceRange(4000, 8000);
    await searchHotel.selectUserRating('Excellent');

    await searchHotel.selectPropertyType('Resort');
    await searchHotel.verifySearchResults('Goa');
});