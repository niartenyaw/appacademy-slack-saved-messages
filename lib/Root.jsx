import React from 'react';

import SideNav from './SideNav';
import MessageList from './MessageList'

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <div>Hello!</div>
    );
  }
};
