import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rooms: [],
  activeRoom: "",
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    addRoomsList: (state, action) => {
      state.rooms = action.payload;
    },
    appendRoomsList: (state, action) => {
      state.rooms.push(action.payload);
    },
    setActiveRoom: (state, action) => {
      state.activeRoom = action.payload;
    },
  },
});

export default roomSlice.reducer;
export const { appendRoomsList, addRoomsList, setActiveRoom } =
  roomSlice.actions;
