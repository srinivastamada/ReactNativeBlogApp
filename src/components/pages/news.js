import React, {Component} from 'react';
import {Text} from 'react-native';
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
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus"/>
              <Text>Google Plus</Text>
              <Right>
                <Icon name="arrow-forward"/>
              </Right>
            </CardItem>
          </Card>
        </Content>

    );
  }
}

module.export = News;