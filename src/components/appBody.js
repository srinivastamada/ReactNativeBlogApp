import React, {Component} from 'react';
import AppBodyData from './appBodyData';
import {Content} from 'native-base';
export default class AppBody extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    getData() {
        fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {

            this.setState({data: responseJson.movies });

        }).catch((error) => {
            console.error(error);
        });
    }

    componentDidMount() {
        this.setState({data: []});
        this.getData();

    }

    render() {

        return (
            <AppBodyData data={this.state.data}/>
        );
    }
}

module.export = AppBody;