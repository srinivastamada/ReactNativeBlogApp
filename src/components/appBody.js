import React, {Component} from 'react';
import AppBodyData from './appBodyData';
import {Content} from 'native-base';
export default class AppBody extends Component {

    getData() {
        fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {
            alert(responseJson.movies);
            this.setState({data: responseJson.movies});

        }).catch((error) => {
            console.error(error);
        });
    }


    componentDidMount() {
        this.getData();

    }

    render() {

        return (
            <Content>
            </Content>
        );
    }
}

module.export = AppBody;