import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { transitionDuration } from '../app/app';
import { siteEntered } from '../app/actions';

export default class Landing extends Component {
  state = {
    entered : false
  }

  onEnter() {
    this.setState({
      entered : true
    });
    setTimeout(() => {
      siteEntered();
    }, transitionDuration.medium);
  }

  render() {
    const entered = this.state.entered ? 'fadeout' : '';
    const dashentered = this.state.entered ? 'off' : '';

    return (
      <div className={`landing ${entered}`}>
        <div className={`header ${entered}`}>Welcome</div>
        <div onClick={this.onEnter.bind(this)} className={`subheader ${entered}`}>
          <div className='enter'>enter</div>
          <div className={`dash ${dashentered}`}></div>
        </div>
      </div>
    );
  }
};

Landing.propTypes = {
  entered : PropTypes.bool
};
