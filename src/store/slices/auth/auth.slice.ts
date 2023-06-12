import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

import { type IAuthUserSlice } from "./authSlice.types";
import { type IUser } from "global/user.types";

const token = localStorage.getItem("token");

const initialState: IAuthUserSlice = {
  user: {} as IUser,
};

if (token) {
  try {
    const jwtDecoded = jwt_decode<IUser>(token);
    const timeToExpire = (jwtDecoded.exp as number) - Date.now();
    if (timeToExpire > 0) {
      setTimeout(() => {
        localStorage.setItem("token", "");
      }, timeToExpire);
      initialState.user.token = token;
    }
  } catch (error) {
    localStorage.setItem("token", "");
    // console.log("error parsing token", error);
  }
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action: { payload: IAuthUserSlice }) => {
      state.user = action.payload?.user;
      localStorage.setItem("token", JSON.stringify(action.payload?.user.token));
    },
  },
});

export const { authenticate } = slice.actions;

export default slice.reducer;
