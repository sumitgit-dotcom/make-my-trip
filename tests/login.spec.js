import { test, expect } from '@playwright/test';
import { Login } from '../../pages/Login';

test('Login to MakeMyTrip', async ({ page }) =>
{ const loginPage = new Login(page);

    await loginPage.goToLoginPage();
    await loginPage.openLoginModal();
    await loginPage.enterPhoneNumber('8871220199');
    await loginPage.enterPassword('yourpassword');

    await loginPage.verifyLoginSuccess();
})
