import { bookingStatus } from "./booking";

export interface IBookingPutBooking {
  id: string; /// params
  status: bookingStatus;
  notes: string;
  cancellationReason: string;
}
