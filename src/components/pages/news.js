import React, {Component} from 'react';
import {Text, WebView} from 'react-native';
import {Container, Content, Card, CardItem, Icon, Right} from 'native-base';
import {AppFooter} from '../appFooter'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    };
  }
  render() {
    return (
   
        <Content style={ {  marginTop: 75 } }>
          <WebView
        source={{uri: 'https://www.google.com'}}
        style={{marginTop: 20}}
      />
        </Content>

    );
  }
}

module.export = News;