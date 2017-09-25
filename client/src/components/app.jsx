import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Landing from './landing.jsx';
import Profile from './profile.jsx';

export default class App extends Component {
  render() {
    if (window.innerWidth < 1048) return (
      <div>
        Oops! The mobile site is under construction...
        <br />
        Please come back soon, or visit the site on device with a wider screen.
        <br /> <br />
        Sorry for the inconvenience! Working on making this great! :)
        <br/> <br/>
        Thanks!
        <br/>
        Arjun
      </div>
    )
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
