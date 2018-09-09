import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import '../utils/i18n';
import {
  translate,
  InjectedTranslateProps,
  InjectedI18nProps
} from 'react-i18next';

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
    const newLang = i18n.language.includes('zh') ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
  };
  render() {
    const { t, i18n } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{t('Press Cmd+R to reload')}</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{this.instructions}</Text>
        <Button onPress={this.changeLang} title="BUTTON" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default translate()(App);
