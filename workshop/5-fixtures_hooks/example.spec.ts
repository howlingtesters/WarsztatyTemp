import { test as base } from '@playwright/test';
import { ToDoPage } from '../../page-object/to-do-page';
import { ToDoEntity } from '../../page-object/to-do-entity';

export type Items = {
  defaultItem: string;
};

const test = base.extend< Items & { todoPage: ToDoPage } & {forEachTest: void}, { forEachWorker: void } >({
  defaultItem: ['Something nice', { option: true }],

  todoPage: async ({ page }, use) => {
    const toDoPage = new ToDoPage(page);
    await toDoPage.open()
    await use(toDoPage);

    // Clean up the fixture.
    await page.close()
  },

  forEachTest: [async ({ page }, use) => {
    console.log('Global before each: My tests are so close!');
    await use();
    console.log('Global after each: My last url is - ', page.url());
  }, { auto: true }],  // automatically starts for every test.

  forEachWorker: [async ({}, use) => {
    console.log()
    let workerIndex = test.info().workerIndex
    console.log(`Starting test worker: ${workerIndex}`);
    await use();
    // console.log(`Leaving test worker ${test.info().workerIndex}`);
    console.log(`Leaving test worker: ${workerIndex}`);
    console.log()
  }, { scope: 'worker', auto: true }],  // automatically starts for every worker.
});

test.describe("Page Objects", () => {

  test.beforeAll(async ({}) => {
    console.log("Local before all tests!")
  });

  test.afterAll(async ({}) => {
    console.log("Local after all tests!")
  });

  test.beforeEach(async ({}) => {
    console.log("Local before each test: My test will start soon!!!")
  });

  test.afterEach(async ({page}) => {
    console.log("local after each test: And it is the end if each test")
    await page.close()
  });

  ['First test is running!!!', 'Second test is running!!!', 'Third test is running!!!'].forEach( name  => {
    test(`Test to do page with task name: ${name}`, async ({ page, browser, browserName, context }) => {
      // Given
      console.log(name)
      let entity: ToDoEntity = {
        taskName: name, 
        isCompleted: false
      }

      let toDoPage: ToDoPage = new ToDoPage(page)

      // When 
      await toDoPage.open()
      await toDoPage.addToDo(entity)

      // Then
      await toDoPage.validatePage()  
    });
  })

  test(`Test to do page with task`, async ({ page, browser, browserName, context, todoPage, defaultItem, forEachWorker }) => {
    // Given
    console.log(defaultItem)
    let entity: ToDoEntity = {
      taskName: 'My first task', 
      isCompleted: false
    }

    // When 
    await todoPage.addToDo(entity)

    // Then
    await todoPage.validatePage()  
  });
});