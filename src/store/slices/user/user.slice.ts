import { createSlice } from "@reduxjs/toolkit";

import { type IUserSlice } from "./userSlice.types";
import { type IUser } from "global/user.types";

const initialState: IUserSlice = {
  user: {} as IUser,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: { payload: IUserSlice }) => {
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
