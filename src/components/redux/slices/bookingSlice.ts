import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  bookingStatus,
  durationType,
  IBooking,
} from "../../../types/booking/booking";
import {
  IBookingGetBookingQuery,
  IBookingPaginationMetadata,
} from "../../../types/booking/getBooking";
import { deskDirection, deskStatus } from "../../../types/desk/desk";
import { userRole } from "../../../types/user/user";
import { IBookingPostBooking } from "../../../types/booking/postBooking";
import { IBookingPutBooking } from "../../../types/booking/putBooking";
import { IBookingCancelBookingParams } from "../../../types/booking/cancelBooking";
import axios from "axios";
import { IBookingGetBookingByIdParams } from "../../../types/booking/getBookingById";
import axiosInstance from "../../../utils/axiosInstance";

export interface bookingState {
  currentBooking: IBooking;
  bookingList: IBooking[];
  queryParameters: IBookingGetBookingQuery;
  paginationMetadata: IBookingPaginationMetadata;
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
      team: "",
      email: "",
      password: "",
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
  paginationMetadata: {
    totalBookings: 0,
    totalPages: 0,
    currentPage: 1,
  },
};

export const postBookingThunk = createAsyncThunk(
  "booking/create",
  async (bookingData: IBookingPostBooking, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/booking/", bookingData);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

export const putBookingThunk = createAsyncThunk(
  "booking/update",
  async (bookingData: IBookingPutBooking, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/booking/${bookingData._id}`,
        bookingData
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpedted error occurred");
      }
    }
  }
);

export const cancelBookingThunk = createAsyncThunk(
  "booking/cancel",
  async (bookingData: IBookingCancelBookingParams, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/booking/cancel/${bookingData._id}`,
        bookingData
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpedted error occurred");
      }
    }
  }
);

export const getBookingThunk = createAsyncThunk(
  "booking/getAll",
  async (queryParams: IBookingGetBookingQuery, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/booking/", {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpedted error occurred");
      }
    }
  }
);

export const getBookingByIdThunk = createAsyncThunk(
  "booking/getById",
  async (bookingData: IBookingGetBookingByIdParams, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/booking/${bookingData._id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An unexpedted error occurred");
      }
    }
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postBookingThunk.fulfilled, (state, action) => {
      state.currentBooking = action.payload[action.payload.length - 1];
      state.bookingList = [...state.bookingList, ...action.payload];
    });
    builder.addCase(putBookingThunk.fulfilled, (state, action) => {
      state.currentBooking = {
        ...state.currentBooking,
        ...action.payload,
      };
    });
    builder.addCase(cancelBookingThunk.fulfilled, (state, action) => {
      state.bookingList = state.bookingList.map((booking) =>
        booking._id === action.payload._id
          ? { ...booking, status: bookingStatus.CANCELLED }
          : booking
      );
      if (state.currentBooking._id === action.payload._id) {
        state.currentBooking.status = bookingStatus.CANCELLED;
      }
    });
    builder.addCase(getBookingThunk.fulfilled, (state, action) => {
      state.bookingList = action.payload.bookings;
      state.paginationMetadata = {
        totalBookings: action.payload.totalBookings,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
      };
    });
    builder.addCase(getBookingByIdThunk.fulfilled, (state, action) => {
      state.currentBooking = action.payload;
    });
  },
});

export default bookingSlice.reducer;
