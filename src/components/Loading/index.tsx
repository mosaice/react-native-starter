import { PureComponent, default as React } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Spinner from 'react-native-spinkit';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

/*
 * CircleFlip Bounce Wave WanderingCubes Pulse
 * ChasingDots ThreeBounce Circle 9CubeGrid
 * WordPress FadingCircle FadingCircleAlt
 * Arc ArcAlt
 */
export default class Loading extends PureComponent<{}, {}> {
  render() {
    const primary = EStyleSheet.value('$primary');
    return (
      <View style={styles.container}>
        <View>
          <Spinner type="Bounce" color={primary} />
        </View>
      </View>
    );
  }
}
