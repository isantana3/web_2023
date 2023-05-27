import { createSlice } from "@reduxjs/toolkit";

import { type ILaboratorySlice } from "./laboratory.types";
import { type ILaboratory } from "global/laboratory.types";

const initialState: ILaboratorySlice = {
  laboratory: {} as ILaboratory,
};

const slice = createSlice({
  name: "laboratory",
  initialState,
  reducers: {
    setLaboratory: (state, action: { payload: ILaboratorySlice }) => {
      state.laboratory = action.payload.laboratory;
    },
  },
});

export const { setLaboratory } = slice.actions;

export default slice.reducer;
