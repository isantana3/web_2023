import { createSlice } from "@reduxjs/toolkit";

import { type IInfraSlice } from "./infraSlice.types";
import { type IInfra } from "global/infra.types";

const initialState: IInfraSlice = {
  infra: {} as IInfra,
};

const slice = createSlice({
  name: "infra",
  initialState,
  reducers: {
    setInfra: (state, action: { payload: IInfraSlice }) => {
      state.infra = action.payload.infra;
    },
  },
});

export const { setInfra } = slice.actions;

export default slice.reducer;
