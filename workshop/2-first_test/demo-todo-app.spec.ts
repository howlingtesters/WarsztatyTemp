import { test, expect, type Page } from '@playwright/test';
import assert from 'assert';

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
] as const;
test.describe('New Todo', () => {

  test('playwright basics', async ({  page, browser, browserName, context  }) => {
    let randomValue = Math.random()
    console.log(randomValue)
    console.log(browserName)
    assert(randomValue > 0.75)
    await page.goto('https://demo.playwright.dev/todomvc');
    await context.newPage()
    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto('https://playwright.dev');
    await newPage.pause()
    await context.close();
  });

  test('should allow me to add todo items', async ({  page  }) => {
    // create a new todo locator
    await page.goto('https://demo.playwright.dev/todomvc');
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create 1st todo.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0]
    ]);

    // Create 2nd todo.
    await newTodo.fill(TODO_ITEMS[1]);
    await newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.getByTestId('todo-title')).toHaveText([
      TODO_ITEMS[0],
      TODO_ITEMS[1]
    ]);

    await checkNumberOfTodosInLocalStorage(page, 2);
  });

  test('should clear text input field when an item is added', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create one todo item.
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');

    // Check that input is empty.
    await expect(newTodo).toBeEmpty();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });

  test('should append new items to the bottom of the list', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // Create 3 items.
    await createDefaultTodos(page);

    // create a todo count locator
    const todoCount = page.getByTestId('todo-count')
  
    // Check test using different methods.
    await expect(page.getByText('3 items left')).toBeVisible();
    await expect(todoCount).toHaveText('3 items left');
    await expect(todoCount).toContainText('3');
    await expect(todoCount).toHaveText(/3/);

    // Check all items in one call.
    await expect(page.getByTestId('todo-title')).toHaveText(TODO_ITEMS);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });
});

async function createDefaultTodos(page: Page) {
  // create a new todo locator
  const newTodo = page.getByPlaceholder('What needs to be done?');

  for (const item of TODO_ITEMS) {
    await newTodo.fill(item);
    await newTodo.press('Enter');
  }
}

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}