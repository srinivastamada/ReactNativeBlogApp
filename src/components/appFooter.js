import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Footer, FooterTab, Icon, Button, Text} from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active={this.state.active} onPress={Actions.feed}>
            <Icon name="ios-egg"/>
            <Text>Feed</Text>
          </Button>
          <Button active={this.state.active} onPress={Actions.news}>
            <Icon name="paper"/>
            <Text>News</Text>
          </Button>
          <Button active={this.state.active} onPress={Actions.about}>
            <Icon name="contact"/>
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  newFooterBg: {
    color: 'red',
    backgroundColor: '#333333'
  }
});

module.export = AppFooter;