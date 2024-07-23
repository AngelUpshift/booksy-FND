import { IDesk } from "../../../types/desk/desk";
import { IRoomGetRoomQuery } from "../../../types/room/getRoom";
import { IRoomPostRoom } from "../../../types/room/postRoom";
import { IRoomPutRoom } from "../../../types/room/putRoom";
import { IImage, IRoom, roomStatus, roomType } from "../../../types/room/room";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface roomState {
  currentRoom: IRoom;
  roomList: IRoom[];
  queryParameters: IRoomGetRoomQuery;
}

export const initialState: roomState = {
  currentRoom: {
    _id: "",
    name: "",
    description: "",
    images: [] as IImage[],
    desks: [] as IDesk[],
    type: "" as roomType,
    status: "" as roomStatus,
  },
  roomList: [],
  queryParameters: {},
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    postRoom: (state, action: PayloadAction<IRoomPostRoom>) => {
      state.currentRoom.name = action.payload.name;
      state.currentRoom.description = action.payload.description;
      state.currentRoom.images = action.payload.images;
      state.currentRoom.desks = action.payload.desks;
      state.currentRoom.type = action.payload.type;
    },
    putRoom: (state, action: PayloadAction<IRoomPutRoom>) => {
      state.currentRoom = {
        ...state.currentRoom,
        ...action.payload,
      };
    },
    getRoom: (state, action: PayloadAction<IRoomGetRoomQuery>) => {
      state.queryParameters = action.payload;
    },
    getRoomById: (state, action: PayloadAction<IRoom>) => {
      state.currentRoom = action.payload;
    },
  },
});

export const { postRoom, putRoom, getRoom, getRoomById } = roomSlice.actions;
export default roomSlice.reducer;
