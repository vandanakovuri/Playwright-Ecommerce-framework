//import { test } from '@playwright/test';
import { test, expect } from '../fixtures/baseFixtures';
import { SignupPage } from '../Pages/signup';

import data from '../utils/data.json';
import {EnvironmentManager} from '../config/Manager/envManager';

const env = EnvironmentManager.getConfig();

test('Signup Test', async ({ page, signupPage }) => {
//await page.goto('/ ');

await signupPage.clickSignup();
//await signupPage.enterUsernamepassword(data.signup.username, data.signup.password);
await signupPage.enterUsernamePassword(env.username, env.password);
await signupPage.clickSubmit();
});