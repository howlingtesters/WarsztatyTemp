import { test, expect } from "@playwright/test";
import { Booking } from "../engine/booking-model";
import { BookingApi } from "../engine/booking-api";

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
  // given
  const bookingApi = new BookingApi(request);

  // when
  const newBooking = await bookingApi.createBooking(bookingData);

  // then
  expect(newBooking.booking).toEqual(bookingData);
  expect(newBooking.bookingid).not.toBe(null);
});

test("new booking should be fetched by ID", async ({ request }) => {
  // given
  const bookingApi = new BookingApi(request);
  const newBooking = await bookingApi.createBooking(bookingData);
  const bookingId = newBooking.bookingid;

  // when
  const savedBooking = await bookingApi.getBookingById(bookingId);

  // then
  expect(savedBooking).toEqual(bookingData);
});

test("new booking should be found in booking IDs list", async ({ request }) => {
  // given
  const bookingApi = new BookingApi(request);
  const newBooking = await bookingApi.createBooking(bookingData);
  const bookingId = newBooking.bookingid;

  // when
  const savedBooking = await bookingApi.getBookings();

  // then
  expect(savedBooking).toContainEqual({ bookingid: bookingId });
});

test("booking can be deleted", async ({ request }) => {
  // given
  const bookingApi = new BookingApi(request);
  const newBooking = await bookingApi.createBooking(bookingData);
  const bookingId = newBooking.bookingid;

  // when
  await bookingApi.deleteBooking(bookingId);

  // then
  const savedBooking = await bookingApi.getBookings();
  expect(savedBooking).not.toContainEqual({ bookingid: bookingId });
});

test("booking can be updated", async ({ request }) => {
  // given
  const bookingApi = new BookingApi(request);
  const newBooking = await bookingApi.createBooking(bookingData);
  const bookingId = newBooking.bookingid;

  // when
  const updatedBooking = await bookingApi.updateBooking(
    bookingId,
    updatedBookingData,
  );

  // then
  expect(updatedBooking).toEqual(updatedBookingData);
});

test("booking can be partially updated", async ({ request }) => {
  // given
  const bookingApi = new BookingApi(request);
  const newBooking = await bookingApi.createBooking(bookingData);
  const bookingId = newBooking.bookingid;

  // when
  const partiallyUpdatedBooking = await bookingApi.partiallyUpdateBooking(
    bookingId,
    partiallyUpdatedBookingData,
  );

  // then
  expect(partiallyUpdatedBooking).toEqual({
    ...bookingData,
    ...partiallyUpdatedBookingData,
  });
});
