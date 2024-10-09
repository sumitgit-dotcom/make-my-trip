import { test } from '@playwright/test';
import { HomestaySearch } from '../../pages/HomestaySearch';

test('Fill homestay search form and navigate to the results page', async ({ page }) => {
    const homestaySearch = new HomestaySearch(page);

    await homestaySearch.goToHomestayPage();
    await homestaySearch.fillHomestayForm();
    await homestaySearch.performSearch();

});