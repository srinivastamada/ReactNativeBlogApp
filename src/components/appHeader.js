import React, {Component} from 'react';
import { Image} from 'react-native';
import {
  Header, Text, Left, Right, Icon, Button, Body
} from 'native-base';

export default class AppHeader extends Component {
  render() {
    let logo = {
      uri: 'https://lh3.googleusercontent.com/-q7nP4lSJ4tg/Vim1CZJDWvI/AAAAAAAANIU/vE0RZ8-9r' +
          'CE/s599-Ic42/9lessonsLogo.png'
    };
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu'/>
          </Button>
        </Left>
        <Body>
          { /*<Image
            source={require('../img/9lessonsLogo.png')}
            style={{
            width: 160,
            height: 30
          }}/> */ }
          <Text>About</Text>
        </Body>
        <Right/>
      </Header>
    );
  }
}

module.export = AppHeader;