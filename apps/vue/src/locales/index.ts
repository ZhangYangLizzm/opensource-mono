import { createI18n } from 'vue-i18n';
import { LangKey } from '@packages/shared'

import enTranslation from '@packages/shared/src/locales/en/translation.json'
import zhTranslation from '@packages/shared/src/locales/zh/translation.json'

export const i18n = createI18n({
  locale: LangKey['zh'],
  fallbackLocale: LangKey['zh'],
  legacy: false,
  messages: {
    [LangKey['en']]: enTranslation,
    [LangKey['zh']]: zhTranslation,
  },
});
