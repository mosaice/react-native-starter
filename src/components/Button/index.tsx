import * as React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  myButton: {
    backgroundColor: '$primary'
  },
  block: {
    width: '100%'
  }
});

interface Props extends ButtonProps {
  block?: boolean;
}

const MyButton: React.SFC<Props> = ({ block, buttonStyle, ...props }) => (
  <View style={block && styles.block}>
    <Button
      buttonStyle={[styles.myButton, buttonStyle, block && styles.block]}
      {...props}
    />
  </View>
);

MyButton.defaultProps = {
  block: false
};

export default MyButton;
