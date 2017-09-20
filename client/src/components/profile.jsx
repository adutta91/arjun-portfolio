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

  render() {
    // <div className='first-name'>Arjun</div>
    // <div className='last-name'>Dutta</div>
    return (
      <div className={`profile ${this.state.show ? '' : 'hidden'}`}>
        <div className='sidebar'>
          {this.renderContactInfo()}
        </div>
        <div className='profile-img' style={{background : `no-repeat center/100% url(${process.env.PUBLIC_URL}/img/goofy-me.png)`}}></div>
        {this.state.showMenu ? <Menu {...menuData} /> : null}
      </div>
    );
  }
};

Profile.propTypes = {

};
