import React from 'react';
import ReactDOM from 'react-dom';

import Root from './lib/Root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector('#root');

  const channels = [
    'ethics',
    'effective-altruism'
  ];

  ReactDOM.render(<Root channels={channels} />, root);
})

