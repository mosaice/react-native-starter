import EStyleSheet from 'react-native-extended-stylesheet';
import { rem } from '../utils/scale';

EStyleSheet.build({
  $primary: 'black',
  $inverse: 'white',
  $rem: rem()
});
