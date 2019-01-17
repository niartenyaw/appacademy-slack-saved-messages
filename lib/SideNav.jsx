import React from 'react';

export default ({ channels, changeChannel }) => (
  <nav>
    {
      channels.map(channel => (
      <li onClick={ () => changeChannel(channel) }>
        { channel }
      </li>
      ))
    }
  </nav>
);
