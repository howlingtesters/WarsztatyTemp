import { test as teardown } from "@playwright/test";

teardown("I want to go home", async () => {
  console.log("Global teardown per project: I want to go home!");
});
