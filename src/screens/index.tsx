import Button from '../components/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import React, { Component } from 'react';
import {
  InjectedI18nProps,
  InjectedTranslateProps,
  translate
} from 'react-i18next';
import { Platform, Text, View } from 'react-native';

interface Props {}

class App extends Component<
  Props & InjectedTranslateProps & InjectedI18nProps
> {
  instructions = Platform.select({
    ios: 'Press Cmd+R to reload',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu'
  });
  componentDidMount() {
    console.log(this.props);
  }

  changeLang = () => {
    const { i18n } = this.props;
    console.log(i18n);
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
        <Button raised onPress={this.changeLang} title="BUTTON" />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
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
