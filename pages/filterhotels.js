export class SearchHotel {
    constructor(page) {
      this.page = page;
    }

    async goToFilteredHotelPage()
    {
        
        await this.page.goto('https://www.makemytrip.com/hotels/hotel-listing/?_uCurrency=INR&checkin=12202024&checkout=12212024&city=CTGOI&country=IN&filterData=STAR_RATING%7C5&locusId=CTGOI&locusType=city&regionNearByExp=3&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Goa');
        
 }

 async selectStarRating(stars)
 {
    await this.page.click(`input[value="${stars}"]`);
 }
 async selectPriceRange(minPrice, maxPrice)
 {
    await this.page.click('div[data-testid="filter-price-range"]');
    await this.page.fill('input[aria-label="Minimum Price"]', `${minPrice}`);
    await this.page.fill('input[aria-label="Maximum Price"]', `${maxPrice}`);
    await this.page.click('button:has-text("Apply")');
 }

 async selectUserRating(rating)
 {
    await this.page.click(`input[value="${rating}"]`);
 }

 async selectPropertyType(propertyType)
 {
    await this.page.click(`input[value="${propertyType}"]`);
 }

 async verifySearchResults(location) 
 {
    await this.page.waitForSelector('text=' + location);
    await expect(this.page).toHaveText(location);
 }
 }
