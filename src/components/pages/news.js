import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  Container,
  Content,
  Icon,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body
} from 'native-base';
import {AppFooter} from '../appFooter'

const cards = [
  {
    text: 'title',
    name: 'title',
    image: require('../../img/photos/1.png')
  },
  {
    text: 'title',
    name: 'title',
    image: require('../../img/photos/2.png')
  },
  {
    text: 'title',
    name: 'title',
    image: require('../../img/photos/3.png')
  }
];

export default class News extends Component {

  constructor() {
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
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => <Card style={{
            elevation: 3
          }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image}/>
                <Body>
                  <Text>{item.text}</Text>
                  <Text note>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={item.image} style={{ width: 350 }}/>
            </CardItem>
    
          </Card>}/>
        </View>
      </Content>

    );
  }
}

module.export = News;