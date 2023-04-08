import { createSlice } from "@reduxjs/toolkit";
import { langJSON } from "config/lang/lang.index";
import langStorage from "config/storage/lang.storage";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatchType, type RootStateType } from "store/store";

import {
  type ILangSlice,
  type ILanguageHook,
  type LanguageKeyType,
} from "./langSlice.types";

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

export function useLanguage(): ILanguageHook {
  const { lang, currentLangKey } = useSelector(
    (state: RootStateType) => state.langReducer
  );
  const dispatch = useDispatch<AppDispatchType>();

  return {
    lang,
    currentLangKey,
    changeLanguage: (key: LanguageKeyType) => dispatch(changeLang(key)),
  };
}

export default slice.reducer;
