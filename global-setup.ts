import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  console.log("Global setup: I want to start testing");
}

export default globalSetup;
