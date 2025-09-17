import { test, expect } from "@playwright/test";
import { PlaywrightDevPage } from "./page-object/playwright-dev-page";

test("getting started should contain table of contents", async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`,
  ]);
  await page.close();
});

[
  { categoryIndex: 1, articleIndex: 1, expectedText: "Installation" },
  { categoryIndex: 1, articleIndex: 2, expectedText: "Writing tests" },
  { categoryIndex: 1, articleIndex: 3, expectedText: "Generating tests" },
].forEach(({ categoryIndex, articleIndex, expectedText }) => {
  test(`Should show ${expectedText} for article in category: ${categoryIndex} and index: ${articleIndex}`, async ({
    page,
  }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.articleByIndex(categoryIndex, articleIndex);

    expect(await playwrightDev.getArticleHeader()).toEqual(expectedText);
    await expect(page.locator("article h2:nth-child(2)")).toContainText(
      "Introduction",
    );
    console.log("I reached here!");
    await page.close();
  });
});

for (let { categoryIndex, articleIndex, expectedText } of [
  { categoryIndex: 1, articleIndex: 1, expectedText: "Installation" },
  { categoryIndex: 1, articleIndex: 2, expectedText: "Writing tests" },
  { categoryIndex: 1, articleIndex: 3, expectedText: "Generating tests" },
]) {
  test(`Complicated way show ${expectedText} for article in category: ${categoryIndex} and index: ${articleIndex}`, async ({
    page,
  }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.articleByIndex(categoryIndex, articleIndex);

    expect
      .configure({ timeout: 30 * 1000 })
      .soft(
        await playwrightDev.getArticleHeader(),
        `Should have title ${expectedText}`,
      )
      .toEqual(expectedText);
    await expect(page.locator("article h2:nth-child(2)")).toContainText(
      "Introduction",
    );
    console.log("I reached here!");
    await page.close();
  });
}
