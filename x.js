/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator, Text, View, Image, ScrollView} from 'react-native';

class Header extends Component {
  render() {
    let pic = {
       uri: 'https://lh3.googleusercontent.com/-q7nP4lSJ4tg/Vim1CZJDWvI/AAAAAAAANIU/vE0RZ8-9rCE/s599-Ic42/9lessonsLogo.png'
    };
    return (
      <View style={styles.header}>
        
          <Image source={require('./img/9lessonsLogo.png')} style={{width: 160, height: 30}}/>
       
      </View>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer }>
        <Text style={[styles.bigblue, styles.center]}>
          Footer
        </Text>
      </View>
    );
  }
}

export default class ReactNativeBlogApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <ScrollView>
        <Text style={styles.welcome} >Hello</Text>
        </ScrollView>
        <Footer />
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
    fontSize: 320,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#dedede',
    flex: 6
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  center: {
    textAlign: 'center',
  },
  header: {
    flex: .75, backgroundColor: 'powderblue', alignItems: 'center'
  },
  footer: {
    flex: .5, backgroundColor: 'powderblue'
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
});

AppRegistry.registerComponent('ReactNativeBlogApp', () => ReactNativeBlogApp);