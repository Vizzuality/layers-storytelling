import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    chapters: [{ id: 'first-id', location: { center: [0,0] } }],
    accessToken: '',
    style: '',
    theme: '',
    showMarkers: false,
    title: '',
    subtitle: '',
    byline: '',
    alignment: '',
    footer: '' };

  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
