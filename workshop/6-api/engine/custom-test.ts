import { test as base } from '@playwright/test';
import { BookingApi } from './booking-api';

// Declare the types of your fixtures.
type MyFixtures = {
  bookingApi: BookingApi;
};

export const test = base.extend<MyFixtures>({
  bookingApi: async ({ request }, use) => {
    // Set up the fixture.
    const bookingApi = new BookingApi(request);
    // Use the fixture value in the test.
    await use(bookingApi);
  },
});
