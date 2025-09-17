import { Page } from "@playwright/test";
import { wait } from "./waiter.ts";

// Wait time serves simillar purpose as slow mo - in some cases browser might not handle correctly multiple keyboard clicks
let waitTime = 300

export enum Keys {
  ENTER = "Enter",
}

export const pressTab = async (page: Page, browserName: string, repeatTImes: number = 1): Promise<void> => {
  let button = browserName.includes('webkit') ? 'Alt+Tab' : 'Tab';
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await page.keyboard.press(button);
  }
};

export const pressShiftTab = async (page: Page, browserName: string, repeatTImes: number = 1): Promise<void> => {
  let button = browserName.includes('webkit') ? 'Alt+Tab' : 'Tab';
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await page.keyboard.press(`Shift+${button}`);
  }
};

export const pressEnter = async (page: Page, repeatTImes: number = 1): Promise<void> => {
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await page.keyboard.press('Enter');
  }
};

export const pressSpace = async (page: Page, repeatTImes: number = 1): Promise<void> => {
  for (let i = 0; i < repeatTImes; i++) {
      await wait(waitTime);
      await page.keyboard.press('Space');
  }
};

export const writeSentence = async (page: Page, sentence: string): Promise<void> => {
  for (let letter of sentence) {
      await wait(waitTime);
      await page.keyboard.press(letter);
  }
};
