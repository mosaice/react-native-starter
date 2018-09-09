import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const base = 16;
const baseWidth = 375;

export const calcWidth = (percent: number, calculation: number = 0): number =>
  width * percent + calculation;
export const calcHeight = (percent: number, calculation: number = 0): number =>
  height * percent + calculation;

export const rem = (): number => (width / baseWidth) * base;
