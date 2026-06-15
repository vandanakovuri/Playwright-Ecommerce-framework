import { Locator, Page, expect } from '@playwright/test';

import { Logger } from './logger';

export class WaitUtils {

    /**
     * Wait for element to become visible
     */
    static async waitForElementVisible(
        locator: Locator,
        timeout: number = 10000
    ): Promise<void> {

        Logger.info('Waiting for element to become visible');

        await expect(locator).toBeVisible({
            timeout
        });

        Logger.info('Element is visible');
    }

    /**
     * Wait for element to disappear
     */
    static async waitForElementHidden(
        locator: Locator,
        timeout: number = 10000
    ): Promise<void> {

        Logger.info('Waiting for element to disappear');

        await expect(locator).toBeHidden({
            timeout
        });

        Logger.info('Element disappeared successfully');
    }

    /**
     * Wait for page to fully load
     */
    static async waitForPageLoad(
        page: Page
    ): Promise<void> {

        Logger.info('Waiting for page load completion');

        await page.waitForLoadState('networkidle');

        Logger.info('Page loaded successfully');
    }

    /**
     * Wait for loader/spinner to disappear
     */
    static async waitForLoaderToDisappear(
        page: Page,
        loaderSelector: string = '.loading-spinner'
    ): Promise<void> {

        Logger.info('Waiting for loader to disappear');

        const loader = page.locator(loaderSelector);

        await loader.waitFor({
            state: 'hidden',
            timeout: 15000
        });

        Logger.info('Loader disappeared');
    }

    /**
     * Wait and click element safely
     */
    static async waitAndClick(
        locator: Locator,
        timeout: number = 10000
    ): Promise<void> {

        Logger.info('Waiting for element before click');

        await expect(locator).toBeVisible({
            timeout
        });

        await locator.click();

        Logger.info('Element clicked successfully');
    }

    /**
     * Wait and fill input safely
     */
    static async waitAndFill(
        locator: Locator,
        value: string,
        timeout: number = 10000
    ): Promise<void> {

        Logger.info(`Entering value: ${value}`);

        await expect(locator).toBeVisible({
            timeout
        });

        await locator.fill(value);

        Logger.info('Value entered successfully');
    }

    /**
     * Wait for URL
     */
    static async waitForURL(
        page: Page,
        url: string,
        timeout: number = 10000
    ): Promise<void> {

        Logger.info(`Waiting for URL: ${url}`);

        await page.waitForURL(url, {
            timeout
        });

        Logger.info('Expected URL loaded');
    }

    /**
     * Hard wait - avoid unless necessary
     */
    static async hardWait(
        page: Page,
        seconds: number
    ): Promise<void> {

        Logger.warn(
            `Using hard wait for ${seconds} seconds`
        );

        await page.waitForTimeout(seconds * 1000);
    }
}