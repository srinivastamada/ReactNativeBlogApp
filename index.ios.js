/**
 * Srinivas Tamada
 * https://github.com/srinivastamada/ReactNativeBlogApp
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {Container} from 'native-base';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import AppBody from './src/components/appBody';
export default class ReactNativeBlogApp extends Component {
  render() {
    return (
      <Container >
       <AppHeader/>
       <AppBody/>
       <AppFooter/>
      </Container>
    );
  }
}

AppRegistry.registerComponent('ReactNativeBlogApp', () => ReactNativeBlogApp);