import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "booking",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users.push(action.payload);
    },
    putUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { getUser, putUser } = userSlice.actions;
export default userSlice.reducer;
