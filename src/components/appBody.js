import React, {Component} from 'react';
import {Image} from 'react-native';
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

export default class AppBody extends Component {
    render() {
        let banner = {
            uri: 'https://s3.amazonaws.com/9lessonspics/nodeapi/nodebanner.png'
        };
        return (
            <Content>
                <Card>
                    <CardItem>
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
                        <Text>These days, there are no projects that do not have a REST API for creating
                            professional web services. REST ( Representational State Transfer) consists set
                            of guidelines to build a web service, which can be used to modify or view
                            specific information on the web without performing any server side operations.
                            Using RESTful APIs saves huge amount of time. Twitter, Facebook, Google and
                            thousands of companies use REST APIs. This is because REST is the most efficient
                            and widespread standard in the creation of APIs for Internet services.</Text>
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

                  <Card>
                    <CardItem>
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
                        <Text>These days, there are no projects that do not have a REST API for creating
                            professional web services. REST ( Representational State Transfer) consists set
                            of guidelines to build a web service, which can be used to modify or view
                            specific information on the web without performing any server side operations.
                            Using RESTful APIs saves huge amount of time. Twitter, Facebook, Google and
                            thousands of companies use REST APIs. This is because REST is the most efficient
                            and widespread standard in the creation of APIs for Internet services.</Text>
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
            </Content>
        );
    }
}

module.export = AppBody;