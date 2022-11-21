import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "../features/msgSlice";
import roomSlice from "../features/roomSlice";

const store = configureStore({
  reducer: {
    msg: msgSlice,
    room: roomSlice,
  },
});

export default store;
