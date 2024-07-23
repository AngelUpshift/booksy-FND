import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deskDirection, deskStatus, IDesk } from "../../../types/desk/desk";
import { IDeskGetDeskQuery } from "../../../types/desk/getDesk";
import { IDeskPostDesk } from "../../../types/desk/postDesk";
import { IDeskPutDesk } from "../../../types/desk/putDesk";

export interface deskState {
  currentDesk: IDesk;
  deskList: IDesk[];
  queryParameters: IDeskGetDeskQuery;
}

export const initialState: deskState = {
  currentDesk: {
    _id: "",
    name: "",
    shortName: "",
    description: "",
    status: "" as deskStatus,
    direction: "" as deskDirection,
  },
  deskList: [],
  queryParameters: {},
};

export const deskSlice = createSlice({
  name: "desk",
  initialState,
  reducers: {
    postDesk: (state, action: PayloadAction<IDeskPostDesk>) => {
      state.currentDesk.name = action.payload.name;
      state.currentDesk.shortName = action.payload.shortName;
      state.currentDesk.description = action.payload.description;
      state.currentDesk.direction = action.payload.direction;
    },
    putDesk: (state, action: PayloadAction<IDeskPutDesk>) => {
      state.currentDesk = {
        ...state.currentDesk,
        ...action.payload,
      };
    },
    getDesk: (state, action: PayloadAction<IDeskGetDeskQuery>) => {
      state.queryParameters = action.payload;
    },
    getDeskById: (state, action: PayloadAction<IDesk>) => {
      state.currentDesk = action.payload;
    },
  },
});
