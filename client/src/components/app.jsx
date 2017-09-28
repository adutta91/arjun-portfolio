import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Landing from './landing.jsx';
import Profile from './profile.jsx';
import About from './about.jsx';

export default class App extends Component {

  getComponent() {
    switch(this.props.page) {
      case 'index': return <Profile {...this.props} />;
      case 'about': return <About {...this.props} />
      default: return <Profile {...this.props} />;
    }
  }

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
    );
    let showLanding = true;
    if (this.props.entered || this.props.page !== 'index') {
      showLanding = false;
    }

    return (
      <div>
        { showLanding ? <Landing {...this.props} /> : this.getComponent()}
      </div>
    );
  }
};

App.propTypes = {
  entered : PropTypes.bool.isRequired,
  page    : PropTypes.string
};
