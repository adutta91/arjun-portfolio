import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './app/store';

import AppContainer from './containers/app-container.js';

import registerServiceWorker from './registerServiceWorker';
import './stylesheets/theme.css';


const routes = (
  <Provider store={Store}>
    <BrowserRouter>
      <Route exact path="/" component={AppContainer}/>
    </BrowserRouter>
  </Provider>
);

render(routes, document.getElementById('arjun-portfolio-main'));
registerServiceWorker();
