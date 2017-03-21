import React, {Component} from 'react';
import { Image, StyleSheet} from 'react-native';
import {
  Footer, FooterTab, Icon, Button, Text
} from 'native-base';

export default class AppFooter extends Component {
  
  render() {
    return (
      <Footer >
        <FooterTab>
          <Button active>
            <Icon name="egg"/>
            <Text>Feed</Text>
          </Button>
          <Button>
             <Icon active name="navigate"/>
            <Text>News</Text>
          </Button>
          <Button>
            <Icon name="person"/>
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
    backgroundColor: '#333333',
  }
});

module.export = AppFooter;