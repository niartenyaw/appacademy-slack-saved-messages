import React from 'react';

export default class MessageList extends React.Component {
  render() {
    return this.props.messages.map(message => (
      <p>
        {message.text}
      </p>
    ))
  }
}
