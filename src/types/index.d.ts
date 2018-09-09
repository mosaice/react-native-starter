type Storage = {
  save(config: any): Promise<any>;
  load(config: any): Promise<any>;
  getIdsForKey(key: string): Promise<any>;
  getAllDataForKey(key: string): Promise<any>;
  clearMapForKey(key: string): void;
  remove(payload: { key: string | number; id?: string | number }): void;
  clearMap(): void;
};

declare var global: {
  storage: Storage;
};

declare module 'react-native-vector-icons';
declare module 'react-native-storage';
declare module 'react-native-picker';
declare module 'react-native-tab-view';
declare module 'moment/locale/zh-cn';
declare module 'moment/src/lib/locale/en';
declare module 'react-native-spinkit';

declare module 'react-native-extended-stylesheet' {
  import {
    RegisteredStyle,
    StyleProp,
    StyleSheetProperties
  } from 'react-native';
  interface IEStyleSheet {
    build(globalVars: { [P: string]: string | number }): void;
    create<T extends object = {}>(
      styles: T
    ): { [P in keyof T]: RegisteredStyle<P> };
    value(varName: string, props?: any): string | number | undefined;
  }

  const EStyleSheet: IEStyleSheet;
  export default EStyleSheet;
}
