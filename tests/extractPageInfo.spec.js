import { test } from '@playwright/test';
import { ExtractPageInfo } from '../../pages/ExtractPageInfo';

test('Extract page info and save to a Word file', async ({ page }) => {
    const extractPageInfo = new ExtractPageInfo(page);

    await page.goto('https://holidayz.makemytrip.com/holidays/india/search?fromSearchWidget=true&searchDep=Goa&dest=Goa&destValue=Goa&depCity=Bangalore&initd=searchwidget_landing_Goa_notheme&dateSearched=20%2F11%2F2024&glp=true&pdo=false&rooms=2%2C0%2C0%2C0%2C%2C%2C&duration=3_7&onlywithflight=1&budget=25000_35000&hotelchoice=4_4&affiliate=MMT##page_header');
    const scrapedData = await extractPageInfo.scrapePageInfo();
    await extractPageInfo.generateWordFile(scrapedData);
});