import i18next, { i18n } from 'i18next';
import resources from '../translations';
import { reactI18nextModule } from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import cnLocale from 'moment/locale/zh-cn';
import enLocale from 'moment/src/lib/locale/en';

const mLng = {
  zh: {
    name: 'zh-cn',
    lng: cnLocale
  },
  en: {
    name: 'en',
    lng: enLocale
  }
};

const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (c: Function) => {
    let language: 'zh' | 'en';
    try {
      language = await global.storage.load({ key: 'language' });
    } catch (error) {
      language = undefined;
    }

    const deviceLng = DeviceInfo.getDeviceLocale().includes('zh') ? 'zh' : 'en';
    const lng: 'zh' | 'en' = language || deviceLng;
    const ml = mLng[lng];
    moment.updateLocale(ml.name, ml.lng);
    return c(lng);
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

const i18nInstance: i18n = i18next
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackLng: ['en', 'zh'],
    debug: __DEV__,
    resources
  });

export default i18nInstance;

i18nInstance.on('languageChanged', function(lng: 'zh' | 'en') {
  global.storage.save({ key: 'language', data: lng });
  const ml = mLng[lng];
  moment.updateLocale(ml.name, ml.lng);
});
