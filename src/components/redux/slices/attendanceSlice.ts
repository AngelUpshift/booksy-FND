import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAttendance } from "../../../types/attendance/attendance";
import { bookingStatus, durationType } from "../../../types/booking/booking";
import { deskDirection, deskStatus } from "../../../types/desk/desk";
import { team, userRole } from "../../../types/user/user";
import { IAttendanceClockIn } from "../../../types/attendance/clockIn";
import { IAttendanceClockOut } from "../../../types/attendance/clockOut";
import axios from "axios";
import axiosInstance from "../../../utils/axiosInstance";

export const initialState: IAttendance = {
  userId: {
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
  bookingId: {
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
  clockIn: new Date(),
  clockOut: new Date(),
  isClockIn: false,
  isClockOut: false,
};

export const clockInThunk = createAsyncThunk(
  "attendance/clock-in",
  async (data: IAttendanceClockIn, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/attendance/clock-in", data);
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

export const clockOutThunk = createAsyncThunk(
  "attendance/clock-out",
  async (data: IAttendanceClockOut, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/attendance/clock-out", data);
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

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(clockInThunk.fulfilled, (state, action) => {
      state.bookingId = action.payload.bookingId;
      state.userId = action.payload.userId;
      state.clockIn = action.payload.clockIn;
      state.isClockIn = action.payload.isClockIn;
    });
    builder.addCase(clockOutThunk.fulfilled, (state, action) => {
      state.bookingId = action.payload.bookingId;
      state.userId = action.payload.userId;
      state.clockIn = action.payload.clockIn;
      state.clockOut = action.payload.clockOut;
    });
  },
});

export default attendanceSlice.reducer;
