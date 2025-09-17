import { expect, type Locator, type Page } from "@playwright/test";

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator("a", { hasText: "Get started" });
    this.gettingStartedHeader = page.locator("h1", { hasText: "Installation" });
    this.pomLink = page
      .locator("li", {
        hasText: "Guides",
      })
      .locator("a", {
        hasText: "Page Object Model",
      });
    this.tocList = page.locator("article div.markdown ul > li > a");
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }

  async articleByIndex(categoryIndex: number, articleIndex: number) {
    await this.getStarted();
    await this.page
      .locator(
        `[aria-label="Docs sidebar"] li:nth-child(${categoryIndex}) > ul > li:nth-child(${articleIndex}) a`,
      )
      .click();
    await this.waitForLoadState("networkidle");
    await this.waitForLoadState("domcontentloaded");
  }

  async getArticleHeader() {
    return await this.page.locator(`article header`).innerText();
  }

  async waitForLoadState(
    state?: "load" | "domcontentloaded" | "networkidle",
    options?: { timeout?: number },
  ) {
    await this.page.waitForLoadState(state);
  }
}
