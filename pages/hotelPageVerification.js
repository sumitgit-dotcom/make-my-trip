export class HotelPageVerification {
    constructor(page) {
        this.page = page;
    }

    async goToHotelPage() {
        await this.page.goto('https://www.makemytrip.com/hotels/hotel-listing/?checkin=11102024&checkout=11132024&locusId=CTSLV&locusType=city&city=CTSLV&country=IN&searchText=Shimla&roomStayQualifier=2e0e&_uCurrency=INR&reference=hotel&homeStay=true&type=city&rsc=1e2e0e');
    }

    async verifyHotelInformation()
    {
        const images = await this.page.$$eval('img', imgs => imgs.map(img => ({
            src: img.src,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
        })));
        let brokenImages = images.filter(img => img.naturalWidth === 0 || img.naturalHeight === 0);
        if (brokenImages.length > 0) {
            console.error(`Broken Images found: ${brokenImages.length}`);
        } else {
            console.log('All images are appearing correctly.');
        }
    }

    const prices = await this.page.$$eval('.price', elements => elements.map(el => el.innerText));
        if (prices.length === 0) {
            console.error('No prices found on the page.');
        } else {
            console.log('Prices are displayed correctly.');
        }
        const hotelNames = await this.page.$$eval('.hotel-name', elements => elements.map(el => el.innerText));
        if (hotelNames.length === 0) {
            console.error('No hotel names found.');
        } else {
            console.log('Hotel names and descriptions are displayed correctly.');
        }

        const amenities = await this.page.$$eval('.amenities', elements => elements.map(el => el.innerText));
        if (amenities.length === 0) {
            console.error('No amenities found.');
        } else {
            console.log('Amenities are displayed correctly.');
        }
    }
