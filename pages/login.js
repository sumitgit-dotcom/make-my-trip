export class login {
    constructor(page) {
      this.page = page;
    }

    async goToLoginPage()
    {

        await this.page.goto('https://www.makemytrip.com/');
    }

    async openLoginModal()
    {
        await this.page.waitForSelector('li[data-cy="account"]', { timeout: 5000 });
        await this.page.click('li[data-cy="account"]');
        await this.page.waitForSelector('input#username', { timeout: 5000 });
    }
    async enterPhoneNumber(phoneNumber)
    {
        await this.page.fill('input#username', phoneNumber);
        await this.page.click('button[data-cy="continueBtn"]');
    } 
    async enterPassword(password)
    {
        await this.page.waitForSelector('input#password', { timeout: 5000 });
        await this.page.fill('input#password', password);
        await this.page.click('button[data-cy="login"]');
    }

    async verifyLoginSuccess()
    {
        await this.page.waitForSelector('li[data-cy="account"] span:has-text("Your Name")', { timeout: 5000 });
    }}

