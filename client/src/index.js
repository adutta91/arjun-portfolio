import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store from './app/store';

import AppContainer from './containers/app-container.js';
import ProjectDescription from './components/project-description.jsx';

import registerServiceWorker from './registerServiceWorker';
import './stylesheets/index.css';


const routes = (
  <Provider store={Store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={AppContainer} />
        <Route path="/projects/:page" component={ProjectDescription}/>
      </div>
    </BrowserRouter>
  </Provider>
);

render(routes, document.getElementById('arjun-portfolio-main'));
registerServiceWorker();
