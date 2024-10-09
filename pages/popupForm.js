export class PopupForm {
    constructor(page) {
        this.page = page;
    }

    async fillPopupForm()
    {
        await this.page.fill('input[placeholder="Destination"]', 'Goa');
        await this.page.fill('input[placeholder="Departure City"]', 'Bangalore');
        await this.page.fill('input[placeholder="Name"]', 'John Doe');
        await this.page.fill('input[placeholder="Phone"]', '+919876543210');
        await this.page.fill('input[placeholder="Email"]', 'johndoe@example.com');
        await this.page.check('input[type="checkbox"]');
        await this.page.click('button:has-text("Get a Callback")');
        console.log('Form submitted successfully.');
    }
    }