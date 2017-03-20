import React, {Component} from 'react';
import {Image, AlertIOS} from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Button,
    Text,
    Icon,
    Left,
    Body,
    Thumbnail,
    View
} from 'native-base';
import FitImage from 'react-native-fit-image';
export default class AppBodyData extends Component {

    render() {
        var updatesEach = this
            .props
            .data
            .map(function (update, index) {
                return (
                    <div className="feedBody">
                      {update.title}
                    </div>
                )
            }, this);
        return (
            <Card>
                <CardItem>
                {this.props.data.title}
                    <Left>
                        <Thumbnail source={require('../img/SrinivasTamada.png')}/>
                        <Body>
                            <Text>Create a RESTful API using NodeJS and MySQL Database</Text>
                            <Text note>Srinivas Tamada</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <View
                        style={{
                        flexDirection: "row",
                        flex: 1
                    }}>
                        <FitImage
                            source={{
                            uri: 'https://s3.amazonaws.com/9lessonspics/nodeapi/nodebanner.png'
                        }}/>
                    </View>

                </CardItem>
                <CardItem content>
                    <Text>x</Text>
                </CardItem>
                <CardItem
                    style={{
                    justifyContent: 'space-around'
                }}>

                    <Button transparent>
                        <Icon active name="chatbubbles"/>
                        <Text>4 Comments</Text>
                    </Button>
                    <Text>11h ago</Text>
                </CardItem>
            </Card>
        );
    }
}
module.export = AppBodyData;