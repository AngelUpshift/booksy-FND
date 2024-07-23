import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  bookingStatus,
  durationType,
  IBooking,
} from "../../../types/booking/booking";
import { IBookingGetBookingQuery } from "../../../types/booking/getBooking";
import { deskDirection, deskStatus } from "../../../types/desk/desk";
import { team, userRole } from "../../../types/user/user";
import { IBookingPostBooking } from "../../../types/booking/postBooking";
import { IBookingPutBooking } from "../../../types/booking/putBooking";
import { IBookingCancelBookingParams } from "../../../types/booking/cancelBooking";

export interface bookingState {
  currentBooking: IBooking;
  bookingList: IBooking[];
  queryParameters: IBookingGetBookingQuery;
}

export const initialState: bookingState = {
  currentBooking: {
    _id: "",
    status: "" as bookingStatus,
    date: new Date(),
    user: {
      _id: "",
      first_name: "",
      last_name: "",
      team: "" as team,
      email: "",
      password: "",
      confirmPassword: "",
      role: "" as userRole,
      avatar_url: "",
    },
    desk: {
      _id: "",
      name: "",
      shortName: "",
      description: "",
      status: "" as deskStatus,
      direction: "" as deskDirection,
    },
    duration: 1 as durationType,
    notes: "",
    cancellationReason: "",
    referenceNumber: "",
  },
  bookingList: [],
  queryParameters: {},
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    postBooking: (state, action: PayloadAction<IBookingPostBooking>) => {
      state.currentBooking.desk._id = action.payload.desk_id;
      state.currentBooking.date = action.payload.date;
      state.currentBooking.duration = action.payload.duration;
    },
    putBooking: (state, action: PayloadAction<IBookingPutBooking>) => {
      state.currentBooking = {
        ...state.currentBooking,
        ...action.payload,
      };
    },
    cancelBooking: (
      state,
      action: PayloadAction<IBookingCancelBookingParams>
    ) => {
      state.bookingList = state.bookingList.map((booking) =>
        booking._id === action.payload._id
          ? { ...booking, status: bookingStatus.CANCELLED }
          : booking
      );
      if (state.currentBooking._id === action.payload._id) {
        state.currentBooking.status = bookingStatus.CANCELLED;
      }
    },
    getBooking: (state, action: PayloadAction<IBookingGetBookingQuery>) => {
      state.queryParameters = action.payload;
    },
    getBookingById: (state, action: PayloadAction<IBooking>) => {
      state.currentBooking = action.payload;
    },
  },
});

export const {
  postBooking,
  putBooking,
  cancelBooking,
  getBooking,
  getBookingById,
} = bookingSlice.actions;
export default bookingSlice.reducer;
