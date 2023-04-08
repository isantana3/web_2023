import { createSlice } from "@reduxjs/toolkit";

import { type ILaboratorySlice } from "./laboratory.types";
import { type ILaboratory } from "global/laboratory.types";

const initialState: ILaboratorySlice = {
  infra: {} as ILaboratory,
};

const slice = createSlice({
  name: "laboratory",
  initialState,
  reducers: {
    setinfra: (state, action: { payload: ILaboratorySlice }) => {
      state.infra = action.payload.infra;
    },
  },
});

export const { setinfra } = slice.actions;

export default slice.reducer;
