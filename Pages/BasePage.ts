import { Page, Locator, expect, test} from '@playwright/test';
import { Logger } from '../utils/logger';
export class BasePage {
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  /**
   * Navigate to URL
   */
  async navigate(url: string) {
    await this.page.goto(url);
  }
  /**
   * Click element
   */
  /*async click(locator: Locator) {
    await locator.click();
  }*/

async click(locator: Locator, elementName?: string) {
   await test.step(`Clicking on ${elementName}`, async () => {
      try {
         await locator.waitFor({
            state: 'visible'
         });
         await locator.click();
         Logger.info(`Clicked on ${elementName}`);
      } catch(error) {
         Logger.error(`Failed clicking ${elementName}`);
         await this.takeScreenshot(`Failed_${elementName}`);
         throw error;
      }
   });
}






  /**
   * Fill input field
   */
  async fill(locator: Locator, text: string) {
    await locator.fill(text);
  }

  /**
   * Get text from element
   */
  async getText(locator: Locator) {
    return await locator.textContent();
  }
  /**
   * Wait for element visible
   */
  async waitForElement(locator: Locator) {
    await locator.waitFor({
      state: 'visible'
    });
  }
  /**
   * Verify element visible
   */
  async verifyElementVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
  /**
   * Verify page title
   */
  async verifyTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }
  /**
   * Verify URL
   */
  async verifyURL(url: string) {
    await expect(this.page).toHaveURL(url);
  }
  /**
   * Press keyboard key
   */
  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }
  /**
   * Wait for timeout
   * Avoid using unnecessarily
   */
  async wait(milliseconds: number) {
    await this.page.waitForTimeout(milliseconds);
  }
  /**
   * Scroll into view
   */
  async scrollIntoView(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
  }
  /**
   * Hover over element
   */
  async hover(locator: Locator) {
    await locator.hover();
  }
  /**
   * Double click
   */
  async doubleClick(locator: Locator) {
    await locator.dblclick();
  }
  /**
   * Right click
   */
  async rightClick(locator: Locator) {
    await locator.click({
      button: 'right'
    });
  }
  /**
   * Select dropdown value
   */
  async selectDropdown(locator: Locator, value: string) {
    await locator.selectOption(value);
  }
  /**
   * Upload file
   */
  async uploadFile(locator: Locator, filePath: string) {
    await locator.setInputFiles(filePath);
  }
  /**
   * Screenshot
   */
  async takeScreenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`
    });
  }
}