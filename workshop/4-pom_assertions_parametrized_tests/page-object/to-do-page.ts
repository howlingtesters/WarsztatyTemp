import { Page } from "playwright-core";
import { expect } from "playwright/test";
import { BasePage } from "./base-page";
import { ButtonElement } from "./button-element";
import { ToDoEntity } from "./to-do-entity";
import { Keys } from "./keys";


const baseSelector = ".todoapp";

export class ToDoPage extends BasePage {

  public activeButton: ButtonElement

  constructor(
    protected page: Page,
    private url: string = "https://demo.playwright.dev/todomvc",
    tabName: string = "React • TodoMVC"
  ) {
    super(page, url, tabName, baseSelector);
    this.activeButton = new ButtonElement(page, '[class="filters"] li:nth-child(2)', 'Active')
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await this.shouldBeOpened();
  }

  async validatePage(): Promise<void> {
    await this.activeButton.validateElement()
    expect(await this.page.locator('h1').innerText()).toEqual('todos')
  }

  async addToDo(entity: ToDoEntity): Promise<void> {
    await this.page.locator('[class="new-todo"]').fill(entity.taskName)
    await this.page.locator('[class="new-todo"]').press(Keys.ENTER)
  }
}
