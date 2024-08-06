import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUserRegister } from "../../../types/auth/register";
import { IUser, userRole } from "../../../types/user/user";
import { IUserLogin } from "../../../types/auth/login";
import { IUserChangePassword } from "../../../types/auth/changePassword";
import { IUserForgotPassword } from "../../../types/auth/forgotPassword";
import { IUserResetPassword } from "../../../types/auth/resetPassword";
import axiosInstance from "../../../utils/axiosInstance";
import axios from "axios";

const initialState: IUser = {
  _id: "",
  first_name: "",
  last_name: "",
  team: "",
  email: "",
  password: "",
  role: "" as userRole,
  avatar_url: "",
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userData: IUserRegister, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/register", userData);
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

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userData: IUserLogin, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", userData, {
        withCredentials: true,
      });
      const { accessToken } = response.data;

      localStorage.setItem("token", accessToken);
      window.location.href = "/room";
      //ToDo: after this we need to redirect to auth page
      //set the token here so that it's not set on every page
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

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/logout");
      localStorage.removeItem("token");
      window.location.href = "/login";

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

export const meThunk = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/auth/me");
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

export const changePasswordThunk = createAsyncThunk(
  "auth/change-password",
  async (passwordData: IUserChangePassword, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/auth/change-password",
        passwordData
      );
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

export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgot-password",
  async (passwordData: IUserForgotPassword, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/auth/forgot-password",
        passwordData
      );
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

export const resetPasswordThunk = createAsyncThunk(
  "auth/reset-password",
  async (
    {
      token,
      ...passwordData
    }: { token: string | undefined } & IUserResetPassword,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.patch(
        `/auth/reset-password/${token}`,
        passwordData
      );
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state = action.payload;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.first_name = "";
      state.last_name = "";
      state.team = "";
      state.email = "";
      state.password = "";
      state.role = "" as userRole;
      state.avatar_url = "";
    });
    builder.addCase(meThunk.fulfilled, (state, action) => {
      state._id = action.payload._id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.team = action.payload.team;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
      state.avatar_url = action.payload.avatar_url;
    });
    builder.addCase(changePasswordThunk.fulfilled, (state, action) => {
      state._id = action.payload._id;
      state.password = action.payload.password;
    });
    builder.addCase(forgotPasswordThunk.fulfilled, (state, action) => {
      state.email = action.payload.email;
    });
    builder.addCase(resetPasswordThunk.fulfilled, (state, action) => {
      state.password = action.payload.password;
    });
  },
});

export default authSlice.reducer;
