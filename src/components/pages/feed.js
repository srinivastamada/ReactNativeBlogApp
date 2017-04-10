import React, {Component} from 'react';
import FeedData from './feedData';
import {Content} from 'native-base';
export default class Feed extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
 
  }

  getData() {
    fetch('https://www.thewallscript.com/blogfeed/blog.json', {method: 'GET'}).then((response) => response.json()).then((responseJson) => {

      this.setState({data: responseJson.feed.entry});

    }).catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {

    this.getData();

  }

  render() {

    return (<FeedData data={this.state.data}/>);
  }
}

module.export = Feed;