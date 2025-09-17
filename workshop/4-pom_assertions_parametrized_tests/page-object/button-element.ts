import { expect, Page } from "@playwright/test";
import { BaseElement } from "./base-element";

export class ButtonElement extends BaseElement {
  
  constructor(
    protected page: Page,
    selector: string,
    public label: string
  ) {
    super(selector, page);
  }

  public async checkLabel() {
    expect(await this.element().innerText()).toEqual(this.label);
  }

  public async validateElement(shouldBeEnabled: boolean = true) {
    await this.checkLabel()
    if (shouldBeEnabled) {
      await this.toBeEnabled()
    }
  }
}