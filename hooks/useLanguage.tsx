import { useRouter } from "next/router";
import en from "../locales/en";
import fa from "../locales/fa";

export const useLanguage = () => {
  const { locale } = useRouter();
  //const t = locale === "en" ? en : fa;
  const t = locale === "en" ? en : en;
  return { t, locale };
};
