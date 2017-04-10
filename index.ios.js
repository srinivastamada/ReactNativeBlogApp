/**
 * Srinivas Tamada
 * https://github.com/srinivastamada/ReactNativeBlogApp
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {Container, StyleProvider,  Header, Left, Right, Icon, Button, Body} from 'native-base';
import getTheme from './src/themes/components';
import nineLessons from './src/themes/variables/nineLessons';

import AppHeader from './src/components/appHeader';
import AppFooter from './src/components/appFooter';
import Feed from './src/components/pages/feed';
import News from './src/components/pages/news';
import About from './src/components/pages/about';

import {Router, Scene} from 'react-native-router-flux';

export default class ReactNativeBlogApp extends Component {
  render() {
    return (

      <StyleProvider style={getTheme(nineLessons)}>
        <Container >
     
          <Router>
            <Scene key="root">
              <Scene key="feed" component={Feed} title="Feed"/>
              <Scene key="about" component={About} title="About"/>
              <Scene key="news" component={News} title="News"/>
            </Scene>
          </Router>

  
          <AppFooter/>
        </Container>
      </StyleProvider>

    );
  }
}

AppRegistry.registerComponent('ReactNativeBlogApp', () => ReactNativeBlogApp);