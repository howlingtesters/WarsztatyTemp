import { test as teardown } from '@playwright/test';

teardown('I want to do tests', async () => {
  console.log('Global setup per project: SO HAPPY TO BE HERE!');
});