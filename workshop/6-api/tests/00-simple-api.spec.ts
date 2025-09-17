import { test, expect } from "@playwright/test";
import { Booking } from "../engine/booking-model";

const BASE_API_URL = "https://restful-booker.herokuapp.com";
const bookingData: Booking = {
  firstname: "Anna",
  lastname: "Wanna",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

const updatedBookingData: Booking = {
  firstname: "Andrzej",
  lastname: "Duda",
  totalprice: 130,
  depositpaid: false,
  bookingdates: {
    checkin: "2023-12-12",
    checkout: "2023-12-15",
  },
  additionalneeds: "Flowers",
};

const partiallyUpdatedBookingData: Booking = {
  lastname: "Duda",
};

test("it is possible to create new booking", async ({ request }) => {
  // when
  const newBookingResponse = await request.post(`${BASE_API_URL}/booking`, {
    data: bookingData,
  });

  // then
  expect(newBookingResponse.status()).toBe(200);
  const body = await newBookingResponse.json();
  expect(body.booking).toEqual(bookingData);
  expect(body.bookingid).not.toBe(null);
});

test("new booking should be fetched by ID", async ({ request }) => {
  // given
  const newBookingResponse = await request.post(`${BASE_API_URL}/booking`, {
    data: bookingData,
  });
  expect(newBookingResponse.status()).toBe(200);
  const bookingId = (await newBookingResponse.json()).bookingid;

  // when
  const getBookingResponse = await request.get(
    `${BASE_API_URL}/booking/${bookingId}`,
  );

  // then
  expect(getBookingResponse.status()).toBe(200);
  expect(await getBookingResponse.json()).toEqual(bookingData);
});

test("new booking should be found in booking list", async ({ request }) => {
  // given
  const newBookingResponse = await request.post(`${BASE_API_URL}/booking`, {
    data: bookingData,
  });
  expect(newBookingResponse.status()).toBe(200);
  const bookingId = (await newBookingResponse.json()).bookingid;

  // when
  const getBookingsResponse = await request.get(`${BASE_API_URL}/booking`);

  // then
  expect(getBookingsResponse.status()).toBe(200);
  expect(await getBookingsResponse.json()).toContainEqual({
    bookingid: bookingId,
  });
});

test("booking can be removed", async ({ request }) => {
  // given
  const newBookingResponse = await request.post(`${BASE_API_URL}/booking`, {
    data: bookingData,
  });
  expect(newBookingResponse.status()).toBe(200);
  const bookingId = (await newBookingResponse.json()).bookingid;

  // when
  const deleteBookingResponse = await request.delete(
    `${BASE_API_URL}/booking/${bookingId}`,
    { headers: { Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=" } },
  );

  // then
  expect(deleteBookingResponse.status()).toBe(201);

  // then
  const getBookingsResponse = await request.get(`${BASE_API_URL}/booking`);

  // then
  expect(getBookingsResponse.status()).toBe(200);
  expect(await getBookingsResponse.json()).not.toContainEqual({
    bookingid: bookingId,
  });
});

test("booking can be updated", async ({ request }) => {
  // given
  const newBookingResponse = await request.post(`${BASE_API_URL}/booking`, {
    data: bookingData,
  });
  expect(newBookingResponse.status()).toBe(200);
  const bookingId = (await newBookingResponse.json()).bookingid;

  // when
  const updateBookingResponse = await request.put(
    `${BASE_API_URL}/booking/${bookingId}`,
    {
      headers: { Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=" },
      data: updatedBookingData,
    },
  );

  // then
  expect(updateBookingResponse.status()).toBe(200);
  expect(await updateBookingResponse.json()).toEqual(updatedBookingData);
});

test("booking can be partially updated", async ({ request }) => {
  // given
  const newBookingResponse = await request.post(`${BASE_API_URL}/booking`, {
    data: bookingData,
  });
  expect(newBookingResponse.status()).toBe(200);
  const bookingId = (await newBookingResponse.json()).bookingid;

  // when
  const partialUpdateBookingResponse = await request.patch(
    `${BASE_API_URL}/booking/${bookingId}`,
    {
      headers: { Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=" },
      data: partiallyUpdatedBookingData,
    },
  );

  // then
  expect(partialUpdateBookingResponse.status()).toBe(200);
  expect(await partialUpdateBookingResponse.json()).toEqual({
    ...bookingData,
    ...partiallyUpdatedBookingData,
  });
});
