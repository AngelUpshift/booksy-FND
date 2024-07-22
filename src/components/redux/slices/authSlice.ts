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
