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

export default class AppBodyData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Srinivas Tamada"
        };
    }

    render() {

        let getContentSnippet = function (str) {
            return str
                .split(/\s+/)
                .slice(0, 50)
                .join(" ") + "...";
        };

        let getImage = function (content) {
            var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
            var match = myRegexp.exec(content);
            if (match) 
                return match[1];
            }
        
        let articles = this
            .props
            .data
            .map(function (articleData, index) {

                return (

                    <Card key={articleData.published.$t}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../img/SrinivasTamada.png')}/>
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
                                    uri: getImage(articleData.content.$t)
                                }}/>
                            </View>
                        </CardItem>
                        <CardItem content>

                            <HTMLView value={getContentSnippet(articleData.content.$t)} />
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
                            <Text><TimeAgo time={articleData.published.$t}/>
                            </Text>
                        </CardItem>
                    </Card>
                )
            });

        return (
            <Content>{articles}</Content>
        );
    }
}
module.export = AppBodyData;