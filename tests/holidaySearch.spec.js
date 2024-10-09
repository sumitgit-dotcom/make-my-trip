import { test } from '@playwright/test';
import { HolidaySearch } from '../../pages/HolidaySearch';

test('Fill holiday search form, navigate to the redirected page, and take a screenshot', async ({ page }) => {
    const holidaySearch = new HolidaySearch(page);

    await holidaySearch.goToHolidayPackages();
    await holidaySearch.fillHolidayForm();
    await holidaySearch.performSearch();
    await holidaySearch.takeScreenshot();
});