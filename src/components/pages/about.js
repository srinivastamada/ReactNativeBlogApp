import React, {Component} from 'react';
import {Text} from 'react-native';
import {Content, Button} from 'native-base';

export default class About extends Component {
  constructor(){
    super();
    this.state = {
      active: true
    };
  }
  render() {

    return (
      <Content style={{
                marginTop: 75
            }}>
        <Text>Hello</Text>
      </Content>
    );
  }
}

module.export = About;