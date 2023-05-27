import { createSlice } from "@reduxjs/toolkit";

import { type ILocationSlice } from "./locationSlice.types";
import { type ILocation } from "global/location.types";

const initialState: ILocationSlice = {
  locations: [{}] as ILocation[],
};

const slice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocation: (state, action: { payload: ILocationSlice }) => {
      state.locations = action.payload.locations;
    },
  },
});

export const { setLocation } = slice.actions;

export default slice.reducer;
