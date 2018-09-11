import formurlencoded from 'form-urlencoded';
import axios from 'axios';
import { Platform } from 'react-native';
import i18n from './i18n';

const baseUrl = 'http://www.airsnscloud.com/observer/api';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Platform: Platform.OS,
    env: __DEV__ ? 'development' : 'production',
    language: i18n.language
  }
});

const api = () => {};

export default api;
