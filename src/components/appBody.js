import React, {
    Component
} from 'react';
import AppBodyData from './appBodyData';
import {
    Content
} from 'native-base';
export default class AppBody extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    getData() {
        fetch('https://www.thewallscript.com/blogfeed/javascript/30', {
                method: 'GET'}).then((response) => response.json()).then((responseJson) => {

                this.setState({
                    data: responseJson.feed.entry
                });

            }).catch((error) => {
                console.error(error);
            });
        }

        componentDidMount() {

            this.getData();

        }

        render() {

            return ( <
                AppBodyData data = {
                    this.state.data
                }
                />
            );
        }
    }

    module.export = AppBody;