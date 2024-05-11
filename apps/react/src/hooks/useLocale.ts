import { LangKey } from "@/locales/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLocale = () => {
  const { i18n } = useTranslation();

  const getLocaleText = () => {
    return i18n.language === LangKey["zh-CN"] ? "简体中文" : "English";
  };

  const [localeText, setLocaleText] = useState(getLocaleText());

  const setLocale = (langKey: LangKey) => {
    i18n.changeLanguage(langKey);
    setLocaleText(getLocaleText());
  };

  return { localeText, setLocaleText, setLocale };
};
