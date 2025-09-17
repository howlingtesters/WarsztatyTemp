import { FullConfig } from "@playwright/test";

async function globalTeardown(config: FullConfig) {
  console.log('Global teardown: I want to stop testing')
  console.log('');
}

export default globalTeardown;
