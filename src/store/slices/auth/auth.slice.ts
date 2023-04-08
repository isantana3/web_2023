import { createSlice } from "@reduxjs/toolkit";

import { type IAuthUserSlice } from "./authSlice.types";
import { type IUser } from "global/user.types";

const initialState: IAuthUserSlice = {
  user: {} as IUser,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action: { payload: IAuthUserSlice }) => {
      state.user = action.payload.user;
    },
  },
});

export const { authenticate } = slice.actions;

export default slice.reducer;
