import test, { APIRequestContext, expect } from "@playwright/test";

const BOOKING_API_URL = "https://restful-booker.herokuapp.com";
const bookingData = {
  firstname: "Anna",
  lastname: "Kowalska",
  totalprice: 120,
  depositpaid: true,
  bookingdates: {
    checkin: "2024-12-12",
    checkout: "2024-12-15",
  },
  additionalneeds: "Breakfast",
};

test("new booking can be fetched by booking ID - plain solution", async ({
  request,
}) => {
  // given: new booking is created
  const newBooking = await request.post(`${BOOKING_API_URL}/booking`, {
    data: bookingData,
  });

  // and: check if request is succesful
  expect(newBooking.status()).toEqual(200);

  // and: save booking ID
  const bookingResponseBody = await newBooking.json();
  const bookingId = bookingResponseBody.bookingid;

  // when: booking is retrieved by ID
  const bookingDetailsById = await request.get(
    `${BOOKING_API_URL}/booking/${bookingId}`,
  );

  // then: check if request is succesful
  expect(bookingDetailsById.status()).toEqual(200);

  // then: check if request contains correct data
  expect(await bookingDetailsById.json()).toEqual(bookingData);
});

test("TODO", async ({ request }) => {
  // TODO:
});

///////////////////////////////////////////////////////////////////
// 1. EASY: Add more test(s)

// 2. BONUS: Extract methods createBooking and gettingBookingById

async function createNewBooking(
  request: APIRequestContext,
  bookingData: any,
): Promise<any> {
  // TODO: provide implementation
}

// 3. BONUS: Use type Booking for storing booking data, use it in methods.
// Move to separate file
export type Booking = {
  firstname: string;
  // TODO: Add more parameters
};

// 4. BONUS: Use type NewBookingResponse for storing new booking response data, use it in methods
// Move to separate file
export type NewBookingResponse = {
  bookingid: number;
  booking: Booking;
};

// 5. BONUS: Create BookerApi class to store Booker API methods, pass `request` in class constructor
// Move to separate file
export class BookingApi {
  private readonly baseURL: string = "https://restful-booker.herokuapp.com";

  constructor(public readonly request: APIRequestContext) {}

  // Uncomment and provide implementation
  //   async createNewBooking(bookingData: Booking): Promise<NewBookingResponse> {
  //   }

  //   async getBookingById(bookingId: Booking): Promise<Booking> {
  //   }
}

// 6. (*) Use BookerApi class as fixture
