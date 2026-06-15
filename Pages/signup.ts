import { Locator, Page } from '@playwright/test';
import { Logger } from '../utils/logger';
import { BasePage } from './BasePage';

export class SignupPage extends BasePage {
    //page: Page;
    signup: Locator;
    username: Locator;
    password: Locator;
    submit: Locator;

    constructor(page: Page) {
        super(page);

        this.page = page;
        this.signup = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.submit = page.locator('button[onclick="register()"]');
    }

    async clickSignup() {
        //await this.signup.click();
        await this.click(this.signup, 'Signup Button');

    }

    async enterUsernamePassword(username: string, password: string) {
        Logger.info('Entering username and password');
        //await this.username.fill(username);
        await this.fill(this.username, username);
        //await this.password.fill(password);
        await this.fill(this.password, password);
    }

    async clickSubmit() {
       //await this.submit.click();
        await this.click(this.submit, 'Submit Button');
    }
}
