import React, {Component} from 'react';
import {Image, WebView} from 'react-native';
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
import TimeAgo from 'react-native-timeago';
import HTMLView from 'react-native-htmlview';
import {ContentSnippet, GetImage} from '../../helpers/helpers';
export default class FeedData extends Component {

    render() {
        let articles = this
            .props
            .data
            .map(function (articleData, index) {

                return (

                    <Card key={articleData.published.$t}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../img/SrinivasTamada.png')}/>
                                <Body>
                                    <Text>
                                        {articleData.title.$t}</Text>
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
                                    uri: GetImage(articleData.content.$t)
                                }}/>
                            </View>
                        </CardItem>
                        <CardItem content>

                            <HTMLView value={ContentSnippet(articleData.content.$t)}/>
                        </CardItem>

                        <CardItem
                            style={{
                            justifyContent: 'space-around'
                        }}>
                            <Button transparent>
                                <Icon active name="time"/>
                                <Text><TimeAgo time={articleData.published.$t}/></Text>
                            </Button>

                            <Button transparent>
                                <Icon active name="chatbubbles"/>
                                <Text>{articleData.thr$total.$t}
                                    Comments</Text>
                            </Button>

                        </CardItem>
                    </Card>
                )
            });

        return (
            <Content style={{
                marginTop: 75
            }}>{articles}</Content>
        );
    }
}
module.export = FeedData;