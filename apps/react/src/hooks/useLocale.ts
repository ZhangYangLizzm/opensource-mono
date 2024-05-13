import { LangKey, LangTextMap } from "@packages/shared";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLocale = () => {
  const { i18n } = useTranslation();

  const getLocaleText = () => {
    return LangTextMap[i18n.language]
  };

  const [localeText, setLocaleText] = useState(getLocaleText());

  const setLocale = (langKey: LangKey) => {
    i18n.changeLanguage(langKey);
    setLocaleText(getLocaleText());
  };

  return { localeText, setLocaleText, setLocale };
};
