import { useDispatch, useSelector } from "react-redux";
import { type AppDispatchType, type RootStateType } from "store/store";

import { changeLang } from "./lang.slice";

import { type ILanguageHook, type LanguageKeyType } from "./langSlice.types";

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
