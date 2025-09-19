import test, { Page } from "@playwright/test";
import { json } from "stream/consumers";


export interface Mock {
  url: string;
  status: number;
  json: any;
}

 

export const mockData = async (
  page: Page,
  mock: Mock
) => {
  await page.route(mock.url, async (route) => {
    const response = await route.fetch();
    await route.fulfill({
      response,
      json: mock.json,
      status: mock.status,
    });
  });
};

 
export const overrideMock = async (
  page: Page,
  mock: Mock,
  testfunction: () => any
) => {
  let testResult;
  try {
    await mockData(page, mock);
    testResult = await testfunction();
  } finally {
    page.unroute(mock.url);
  }
  return testResult;
};

  test.only('Catch api during the tests', async ({  page  }) => {
    const waitForRequest = page.waitForResponse((url) => url.url().includes('/todomvc'), {timeout: 30 * 1000})
    await page.goto('https://demo.playwright.dev/todomvc/base.css');
    console.log((await (await waitForRequest).body()).toString())
  });


  test.only('Mock API', async ({  page  }) => {
    // create a new todo locator
    const mockData = {
      url: '**/todomvc',
      status: 404,
      json: {response: "not found"}
    }
    await page.pause()

    const testFunciton = async () => {
      await page.goto('https://demo.playwright.dev/todomvc');
    }

    await overrideMock(page, mockData, testFunciton)
  });