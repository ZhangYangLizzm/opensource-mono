import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from '@packages/shared/src/locales/en/translation.json'
import zhTranslation from '@packages/shared/src/locales/zh/translation.json'
import { LangKey } from "@packages/shared";

// 语言资源字典
const resources = {
  [LangKey["en"]]: {
    translation: enTranslation,
  },
  [LangKey["zh"]]: {
    translation: zhTranslation,
  },
};

i18n
  // 将 initReactI18next 插件传递给 i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  // 初始化 i18next
  .init({
    resources,
    lng: LangKey["zh"],
    fallbackLng: LangKey["zh"], // 当当前语言没有翻译时使用的语言
    interpolation: {
      escapeValue: false, // 不逃避值，因为在 React 中已安全
    },
  });

export { i18n }
