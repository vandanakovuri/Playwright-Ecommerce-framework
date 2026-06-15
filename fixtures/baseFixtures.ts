import {test as BaseTest} from '@playwright/test';
import { SignupPage } from '../Pages/signup';

type myFixtures = {
    signupPage: SignupPage;
};

BaseTest.beforeEach(async ({page} ) => {
console.log('starting test');
await page.goto('/');
});
BaseTest.afterEach(async ({page}, testInfo) => {
    if(testInfo.status === testInfo.expectedStatus) {
        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`,
            fullPage: true
        });
    }
console.log('ending test');
await page.close();
});


export const test = BaseTest.extend<myFixtures>({





    signupPage: async ({ page }, use) => {
        const signupPage = new SignupPage(page);
        await use(signupPage);
    }
})

export { expect } from '@playwright/test';