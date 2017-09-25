import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Landing from './landing.jsx';
import Profile from './profile.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.entered ? <Profile {...this.props} /> : <Landing {...this.props} />}
      </div>
    );
  }
};

App.propTypes = {
  entered : PropTypes.bool.isRequired
};
