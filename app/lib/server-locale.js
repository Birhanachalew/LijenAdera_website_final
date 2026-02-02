import { cookies } from "next/headers";
import { DEFAULT_LOCALE, normalizeLocale } from "./i18n";

export const getServerLocale = async () => {
  const cookieStore = await cookies();
  const stored =
    typeof cookieStore?.get === "function"
      ? cookieStore.get("locale")?.value
      : undefined;
  return normalizeLocale(stored || DEFAULT_LOCALE);
};
