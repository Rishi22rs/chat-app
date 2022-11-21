import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msgs: [],
};

const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
    appendMsg: (state, action) => {
      state.msgs.push(action.payload);
    },
  },
});

export default msgSlice.reducer;
export const { appendMsg } = msgSlice.actions;
