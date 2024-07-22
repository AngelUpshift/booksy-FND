import { IDesk } from "../desk/desk";
import { IUser } from "../user/user";

export enum bookingStatus {
  BOOKED = "booked",
  PROBLEM = "problem",
  CANCELLED = "cancelled",
}

export type durationType = 1 | 3 | 5 | 10;

export interface IBooking {
  status: bookingStatus;
  date: Date;
  user: IUser;
  desk: IDesk;
  duration: durationType;
  notes: string;
  cancellationReason: string;
  referenceNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}
