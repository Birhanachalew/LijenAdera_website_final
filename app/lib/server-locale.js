import { DEFAULT_LOCALE, normalizeLocale } from "./i18n";

export const getServerLocale = () => {
  return normalizeLocale(DEFAULT_LOCALE);
};
