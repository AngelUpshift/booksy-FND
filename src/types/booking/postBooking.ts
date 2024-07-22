import { durationType } from "./booking";

export interface IBookingPostBooking {
  room_id: string;
  desk_id: string;
  date: Date;
  duration: durationType;
}
