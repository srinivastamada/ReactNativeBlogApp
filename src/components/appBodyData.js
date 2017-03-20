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

    constructor(props) {
        super(props)
        this.state = {
            name: "Srinivas Tamada"
        };
    }

    render() {

        let updatesEach = this
            .props
            .data
            .map(function (update, index) {

                return (

                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../img/SrinivasTamada.png')}/>
                                <Body>
                                    <Text>
                                        {update.title}</Text>
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
                            <Text>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you
                                built a time machine... out of a DeLorean?! Whoa. This is heavy.</Text>
                        </CardItem>
                        <CardItem
                            style={{
                            justifyContent: 'space-around'
                        }}>
                            <Button transparent>
                                <Icon active name="thumbs-up"/>
                                <Text>12 Likes</Text>
                            </Button>
                            <Button transparent>
                                <Icon active name="chatbubbles"/>
                                <Text>4 Comments</Text>
                            </Button>
                            <Text>11h ago</Text>
                        </CardItem>
                    </Card>
                )
            });

        return (
            <Content>{updatesEach}</Content>
        );
    }
}
module.export = AppBodyData;