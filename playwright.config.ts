import { defineConfig, devices } from '@playwright/test';
import { EnvironmentManager } from './config/Manager/envManager';
const env = EnvironmentManager.getConfig();
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
  expect: {
    timeout: 10000,
  },
  timeout: env.timeout,
  use: {
    baseURL: env.baseUrl,
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
   /* {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },*/
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});