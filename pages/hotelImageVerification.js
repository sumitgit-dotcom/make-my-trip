export class HotelImageVerification {
    constructor(page) {
        this.page = page;
    }

    async verifyAllImages() {
        await this.page.waitForSelector('img');
    
    }

    const images = await this.page.$$eval('img', imgs => 
        imgs.map(img => ({
            src: img.src,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight
        }))
    );

    let brokenImages = [];
    let sizeIssues = [];

    for (const img of images)
    {
        if (img.naturalWidth === 0) {
            brokenImages.push(img.src);
    }
    else if (img.naturalWidth < 200 || img.naturalHeight < 200) {
        sizeIssues.push({
            src: img.src,
            width: img.naturalWidth,
            height: img.naturalHeight
        });

    }}

    return {
        brokenImages,
        sizeIssues
    };


logImageVerificationResults(results) {
    if (results.brokenImages.length > 0) {
        console.log(`Broken Images:`);
        results.brokenImages.forEach(src => console.log(`- ${src}`));
    } else {
        console.log('No broken images found.');
    }

    if (results.sizeIssues.length > 0) {
        console.log(`Images with size issues:`);
        results.sizeIssues.forEach(img => 
            console.log(`- ${img.src} (Width: ${img.width}, Height: ${img.height})`)
        );
    } else {
        console.log('All images have proper sizes.');
    }
}
