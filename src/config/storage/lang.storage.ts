import { localStorageKeys } from "./storage.keys";

import { type LanguageKeyType } from "store/slices/lang/langSlice.types";

const langStorage = {
  remove: (): void => {
    localStorage.removeItem(localStorageKeys.lang);
  },
  set: (value: LanguageKeyType): void => {
    localStorage.setItem(localStorageKeys.lang, value);
  },
  get: (): LanguageKeyType =>
    localStorage.getItem(localStorageKeys.lang) as LanguageKeyType,
};

export default langStorage;
