import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './app/store';

import AppContainer from './containers/app-container';


it('renders without crashing', () => {
  render(
    <Provider store={Store}><AppContainer /></Provider>,
    document.getElementById('root')
  );
});
