import { createSlice } from "@reduxjs/toolkit";
import { IUserRegister } from "../../../types/auth/register";

interface UserState {
  user: IUserRegister | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {},
    login: (state, action) => {},
    logout: (state, action) => {},
    me: (state, action) => {},
    changePassword: (state, action) => {},
    forgotPassword: (state, action) => {},
    resetPassword: (state, action) => {},
  },
});
