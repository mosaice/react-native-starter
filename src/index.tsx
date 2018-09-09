import './utils/storage';
import './utils/styles';
import React, { Component } from 'react';
import Screen from './screens';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
export default class App extends Component<{}> {
  componentDidMount() {}
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Screen />
      </I18nextProvider>
    );
  }
}
