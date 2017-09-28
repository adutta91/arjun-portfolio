import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class About extends Component {
  state = {
    show     : false,
    showMenu : false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show : true });
    }, 1500);
  }

  render() {
    const hidden = this.state.show ? 'hidden' : '';

    return (
      <div className='about'>
        this is an about component
        <div className={`lines ${hidden}`}>
          <div className='vertical-draw'></div>
        </div>
      </div>
    );
  }
};

About.propTypes = {};
