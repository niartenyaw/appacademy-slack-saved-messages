import React from 'react';

import SideNav from './SideNav';
import MessageList from './MessageList'

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: this.props.channels[0],
    };
  }

  componentDidMount() {
    this.props.channels.forEach(channel => {
      const fileLocation = `https://raw.githubusercontent.com/niartenyaw/appacademy-slack-saved-links/master/histories/${channel}.json`;
      fetch(fileLocation).then((response) => {
        return response.json();
      }).then(json => {
        this.setState({ [channel]: json })
      });
    });
  }

  render() {
    const liveMessages = this.state[this.state.currentChannel] || {};
    console.log(liveMessages)
    return (
      <>
        <SideNav channels={this.props.channels} />
        <MessageList messages={ Object.values(liveMessages).reverse() } />
      </>
    );
  }
};
