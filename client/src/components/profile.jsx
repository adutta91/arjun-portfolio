import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { transitionDuration } from '../app/app';
import { menuData } from '../app/app.js';

import Menu from 'react-revolver-menu';

export default class Profile extends Component {
  state = {
    show     : false,
    showMenu : false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show : true });
    }, transitionDuration.short);
  }

  renderContactInfo() {
    return (
      <div className='contact-info'>
        <div className='info-item'>
          <i className='fa fa-at'/>
          <a href='mailto:arjundutta91@gmail.com'>arjundutta91@gmail.com</a>
        </div>
        <div className='info-item'>
          <i className='fa fa-paper-plane-o'/>
          <span>900 NE 65th St.<br/> Seattle, WA 98115</span>
        </div>
        <div className='info-item'>
          <i className='fa fa-phone'/>
          <span>(408) 458-6077</span>
        </div>
      </div>
    );
  }

  renderBio() {
    return (
      <div className='bio'>
        <div className='title'>Arjun Dutta</div>
        <span className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </span>
      </div>
    );
  }

  render() {
    // {this.state.showMenu ? <Menu {...menuData} /> : null}
    return (
      <div className={`profile ${this.state.show ? '' : 'hidden'}`}>
        <div className='sidebar'>
          {this.renderContactInfo()}
          <div className='profile-img' style={{background : `no-repeat center/100% url(${process.env.PUBLIC_URL}/img/goofy-me.png)`}}></div>
        </div>
        <div className='content'>
          {this.renderBio()}
          <div className='explore'>
            <div className='btn'>explore</div>
            <div className='dash'></div>
          </div>
        </div>
      </div>
    );
  }
};

Profile.propTypes = {

};
