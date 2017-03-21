/**
 * Srinivas Tamada Production
 * https://github.com/srinivastamada/ReactNativeBlogApp
 * @srinivastamada
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';
import getTheme from './src/themes/components';
import nineLessons from './src/themes/variables/nineLessons';

export default class ReactNativeBlogApp extends Component {
  render() {
    return (
        <StyleProvider style={getTheme(nineLessons)}>
      <Container>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </Container>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeBlogApp', () => ReactNativeBlogApp);
