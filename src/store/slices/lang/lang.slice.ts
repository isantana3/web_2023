import { createSlice } from "@reduxjs/toolkit";
import { langJSON } from "config/lang/lang.index";
import langStorage from "config/storage/lang.storage";

import { type ILangSlice, type LanguageKeyType } from "./langSlice.types";

const defaultLangKey: LanguageKeyType = langStorage.get() || "pt";

const initialState: ILangSlice = {
  lang: langJSON,
  currentLangKey: defaultLangKey,
};

const slice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang(state, action) {
      state.currentLangKey = action.payload as LanguageKeyType;
      langStorage.set(action.payload as LanguageKeyType);
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;
