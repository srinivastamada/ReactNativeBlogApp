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
        this.state = {name: "Srinivas Tamada"};
    }

    render() {
    
        let updatesEach = this
            .props
            .data
            .map(function (update, index) {
                alert(update.title);
                return (
                    <div>
                      {update.title}
                    </div>
                )
            });

        return (
             <Text note>  {this.state.name}</Text>
        );
    }
}
module.export = AppBodyData;