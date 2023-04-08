import { type langJSON } from "config/lang/lang.index";

export type LanguageKeyType = "pt" | "en";

export interface ILangSlice {
  lang: typeof langJSON;
  currentLangKey: LanguageKeyType;
}

export interface ILanguageHook {
  lang: typeof langJSON;
  currentLangKey: LanguageKeyType;
  changeLanguage: (key: LanguageKeyType) => void;
}
