import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, team, userRole } from "../../../types/user/user";
import { IUserPutUser } from "../../../types/user/putUser";
import { IUserGetUserQuery } from "../../../types/user/getUser";
interface IUserState {
  currentUser: IUser;
  userList: IUser[];
  queryParameters: IUserGetUserQuery;
}

const initialState: IUserState = {
  currentUser: {
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
  userList: [],
  queryParameters: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<IUserGetUserQuery>) => {
      state.queryParameters = action.payload;
    },
    putUser: (state, action: PayloadAction<IUserPutUser>) => {
      state.currentUser = {
        ...state.currentUser,
        ...action.payload,
      };
    },
  },
});

export const { getUser, putUser } = userSlice.actions;
export default userSlice.reducer;
