import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { siteEntered } from '../app/actions';

export default class Landing extends Component {
  state = {
    showWelcome : false,
    showEnter   : false,
    showLanding : true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showWelcome : true });
      setTimeout(() => {
        this.setState({ showEnter : true });
      }, 1000);
    }, 500);
  }

  onEnter() {
    this.setState({
      showWelcome : false,
      showEnter   : false,
      showLanding : false
    });
    setTimeout(() => {
      siteEntered();
    }, 1000);
  }

  render() {
    const showWelcome = this.state.showWelcome ? '' : 'hidden';
    const showEnter   = this.state.showEnter   ? '' : 'hidden';
    const showLanding = this.state.showLanding ? '' : 'hidden';

    return (
      <div className={`landing ${showLanding}`}>
        <div className={`header ${showWelcome}`}>Welcome</div>
        <div onClick={this.onEnter.bind(this)} className={`subheader ${showEnter}`}>
          <div className='dash'></div>
          <div className='enter'>enter</div>
        </div>
      </div>
    );
  }
};

Landing.propTypes = {

};
