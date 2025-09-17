import { APIRequestContext, expect } from '@playwright/test';
import { Booking, NewBookingResponse } from './booking-model';

export class BookingApi {
  private readonly BASE_URL: string = 'https://restful-booker.herokuapp.com';

  constructor(public readonly request: APIRequestContext) {}

  async createBooking(bookingData: Booking): Promise<NewBookingResponse> {
    const path = this.BASE_URL + '/booking';
    const requestData = bookingData;

    const response = await this.request.post(path, { data: requestData });
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async getBookingById(bookingId: number): Promise<Booking> {
    const path = `${this.BASE_URL}/booking/${bookingId}`;
    const response = await this.request.get(path);
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async getBookings(): Promise<{ bookingid: number }[]> {
    const path = `${this.BASE_URL}/booking`;
    const response = await this.request.get(path);
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async deleteBooking(bookingId: number): Promise<void> {
    const path = `${this.BASE_URL}/booking/${bookingId}`;
    const response = await this.request.delete(path, {
      headers: { Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=' },
    });
    expect(response.status()).toBe(201);
  }

  async updateBooking(bookingId: number, booking: Booking): Promise<Booking> {
    const path = `${this.BASE_URL}/booking/${bookingId}`;
    const response = await this.request.put(path, {
      headers: { Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=' },
      data: booking,
    });
    expect(response.status()).toBe(200);
    return await response.json();
  }

  async partiallyUpdateBooking(
    bookingId: number,
    booking: Booking
  ): Promise<Booking> {
    const path = `${this.BASE_URL}/booking/${bookingId}`;
    const response = await this.request.patch(path, {
      headers: { Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=' },
      data: booking,
    });
    expect(response.status()).toBe(200);
    return await response.json();
  }
}
