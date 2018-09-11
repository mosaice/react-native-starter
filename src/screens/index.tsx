import { Button, Text } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';
import {
  InjectedI18nProps,
  InjectedTranslateProps,
  translate
} from 'react-i18next';
import { Platform, View } from 'react-native';
import { observer, inject } from 'mobx-react';

type Props = {};

type InjectProps = Partial<{
  dataA: DataStore.DataA;
  root: DataStore.Root;
}>;

type P = Props & InjectedTranslateProps & InjectedI18nProps & InjectProps;

@inject((store: Store) => ({ dataA: store.root.dataA, root: store.root }))
@observer
class App extends Component<P, {}> {
  instructions = Platform.select({
    ios: 'Press Cmd+R to reload',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu'
  });
  componentDidMount() {}

  changeLang = () => {
    const { i18n } = this.props;
    const newLang = i18n.language.includes('zh') ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };
  render() {
    const { t } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{t('Press Cmd+R to reload')}</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{this.instructions}</Text>
        <Button onPress={this.changeLang} dark>
          <Text>change language</Text>
        </Button>
        <Button onPress={this.props.dataA.increase} primary>
          <Text>{this.props.dataA.count}</Text>
        </Button>
        <Button onPress={this.props.root.init} primary>
          <Text>reset</Text>
        </Button>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  welcome: {
    fontSize: '1rem',
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
    color: '$primary'
  }
});

export default translate()(App);
