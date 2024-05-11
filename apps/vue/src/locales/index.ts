import { createI18n } from 'vue-i18n';
import store from 'store';

import enUS from './en-US';
import zhHK from './zh-HK';
import { DEFAULT_LOCALE } from '@packages/shared-hooks';
import { STORAGE_LOCALE_KEY } from '@packages/shared-hooks';

export const LOCALES_MAP = {
  'en-US': 'English',
  'zh-HK': '繁體中文',
};

export const i18n = createI18n({
  locale: store.get(STORAGE_LOCALE_KEY) || DEFAULT_LOCALE,
  legacy: false,
  messages: {
    'en-US': enUS,
    'zh-HK': zhHK,
  },
});
