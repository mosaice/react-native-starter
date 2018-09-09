import i18next, { i18n } from 'i18next';
import resources from '../translations';
import { reactI18nextModule } from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
console.log(DeviceInfo.getDeviceLocale().includes('zh') ? 'zh' : 'en');
const languageDetector = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (c: Function) =>
    c(DeviceInfo.getDeviceLocale().includes('zh') ? 'zh' : 'en'),
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
// export const t = i18nInstance.t.bind(i18nInstance);
// export const changeLocale = () => {
//   const newLang = i18nInstance.language.includes('zh') ? 'en' : 'zh';
//   i18nInstance.changeLanguage(newLang);
// };
