import './utils/styles';
import './utils/storage';
import './utils/i18n';
import codePush from 'react-native-code-push';
import i18n from './utils/i18n';
import Loading from './components/Loading';
import React, { Component } from 'react';
import Screen from './screens';
import SplashScreen from 'react-native-splash-screen';
import store from './store';
import { I18nextProvider } from 'react-i18next';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'mobx-react';

type State = Readonly<{
  init: boolean;
}>;
class App extends Component<{}, State> {

  state: State = {
    init: false
  };
  async componentDidMount() {
    SplashScreen.hide();
    store.root.global.codePushMessage = await codePush.getUpdateMetadata();

    Platform.select({
      ios: () => StatusBar.setBarStyle('default', true),
      android: () => {
        StatusBar.setBarStyle('dark-content', true);
        StatusBar.setBackgroundColor('white', true);
      }
    })();

    this.setState({ init: true });
  }
  render() {
    const { init } = this.state;
    return (
      <Provider {...store}>
        <I18nextProvider i18n={i18n}>
          {init ? <Screen /> : <Loading />}
        </I18nextProvider>
      </Provider>
    );
  }
}

export default (__DEV__ ? App : codePush()(App));
