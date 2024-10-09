import { test, expect } from '@playwright/test';
import { SearchFlight } from '../../pages/SearchFlight';

test('Search flight from Delhi to New York on 2nd Nov for 2 people', async ({ page }) => {
    const searchFlightPage = new SearchFlight(page);

    await searchFlightPage.goToFlightPage();
    await searchFlightPage.enterFlightDetails();
    await searchFlightPage.searchFlight();
    await searchFlightPage.verifySearchResults();
});

