import { configureStore } from "@reduxjs/toolkit";
import attendanceReducer from "./slices/attendanceSlice";
import authReducer from "./slices/authSlice";
import bookingReducer from "./slices/bookingSlice";
import deskReducer from "./slices/deskSlice";
import roomReducer from "./slices/roomSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    attendance: attendanceReducer,
    auth: authReducer,
    booking: bookingReducer,
    desk: deskReducer,
    room: roomReducer,
    user: userReducer,
  },
});

export default store;
