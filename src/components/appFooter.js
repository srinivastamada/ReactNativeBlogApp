import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Footer, FooterTab, Icon, Button, Text} from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
  constructor() {
    super();
    this.state = {
      activeTabName: 'feed'
    };
  }

  tabAction(tab) {
    this.setState({activeTabName: tab});
    if (tab === 'feed') {
      Actions.feed();
    } else if (tab === 'news') {
      Actions.news();
    } else {
      Actions.about();
    }
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={(this.state.activeTabName === "feed")
            ? true
            : ""}
            onPress={() => {
            this.tabAction('feed')
          }}>
            <Icon name="ios-egg"/>
            <Text>Feed</Text>
          </Button>
          <Button
            active={(this.state.activeTabName === "news")
            ? true
            : ""}
            onPress={() => {
            this.tabAction('news')
          }}>
            <Icon name="paper"/>
            <Text>News</Text>
          </Button>
          <Button
            active={(this.state.activeTabName === "about")
            ? true
            : ""}
            onPress={() => {
            this.tabAction('about')
          }}>
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