import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { transitionDuration } from '../app/app';
import { siteEntered } from '../app/actions';

export default class Landing extends Component {
  state = {
    showWelcome : false,
    showEnter   : false,
    showLine    : false,
    showLanding : true
  }

  componentDidMount() {
    // cascading css transitions
    setTimeout(() => {
      this.setState({ showWelcome : true });
      setTimeout(() => {
        this.setState({ showEnter : true });
        setTimeout(() => {
          this.setState({ showLine : true });
        }, transitionDuration.medium);
      }, transitionDuration.short);
    }, transitionDuration.short);
  }

  onEnter() {
    this.setState({
      showWelcome : false,
      showEnter   : false,
      showLanding : false,
      showLine    : false
    });
    setTimeout(() => {
      siteEntered();
    }, transitionDuration.medium);
  }

  render() {
    const showWelcome = this.state.showWelcome ? '' : 'hidden';
    const showEnter   = this.state.showEnter   ? '' : 'hidden';
    const showLine   = this.state.showLine     ? '' : 'hidden';
    const showLanding = this.state.showLanding ? '' : 'hidden';

    return (
      <div className={`landing ${showLanding}`}>
        <div className={`header ${showWelcome}`}>Welcome</div>
        <div onClick={this.onEnter.bind(this)} className={`subheader ${showEnter}`}>
          <div className='enter'>enter</div>
          <div className={`dash ${showLine}`}></div>
        </div>
      </div>
    );
  }
};

Landing.propTypes = {

};
