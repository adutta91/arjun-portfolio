import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    }, 1500);
    this.listener = window.addEventListener('keyup', this.keyListener.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.listener);
  }

  keyListener(e) {
    switch(e.key) {
      case 'Escape':
        if (this.state.showMenu) this.setState({ showMenu : false});
        break;
      default: return null;
    }
  }

  overlayClick(e) {
    if (this.state.showMenu) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ showMenu : false });
    }
  }

  renderContactInfo() {
    return (
      <div className='contact-info'>
        <div className='info-item'>
          <i className='fa fa-at'/>
          <a href='mailto:arjundutta91@gmail.com'>arjundutta91@gmail.com</a>
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
        <div className='title'>Hello!</div>
        <span className='content'>
        <p> My name is Arjun, and I'm a Web Developer based in Seattle, WA. </p>
        <p> I like to build things. <span className='secret'>And I have a lot of fun doing so.</span></p>
        <p> Thanks for visiting my site - hope you enjoy it! </p>
        </span>
      </div>
    );
  }

  render() {
    const showMenu = this.state.showMenu ? '' : 'hide';
    const hidden = this.state.show ? 'hidden' : '';

    return (
      <div className='profile' onKeyUp={this.keyListener.bind(this)}>
        {this.state.showMenu ? <Menu {...menuData} /> : null}
        <div className={`blur-overlay ${showMenu}`} onClick={this.overlayClick.bind(this)}>
          <div className='display'>
            <div className='sidebar'>
            {this.renderContactInfo()}
            <div className='profile-img' style={{background : `no-repeat center/100% url(${process.env.PUBLIC_URL}/img/goofy-me.png)`}}></div>
            </div>
            <div className='cover-photo' style={{background : `no-repeat center/100% url(${process.env.PUBLIC_URL}/img/coffee-laptop.jpeg)`}}></div>
            <div className='content'>
              {this.renderBio()}
              <div className='explore'>
                <div className='btn' onClick={() => { this.setState({ showMenu : true })}}>explore</div>
                <div className='dash'></div>
              </div>
            </div>
          </div>
          <div className={`lines ${hidden}`}>
            <div className='vertical-draw'></div>
            <div className='horizontal-draw'></div>
            <div className='circle'></div>
            <div className='circle2'></div>
            <div className='block1'></div>
            <div className='block2'></div>
          </div>
        </div>
      </div>
    );
  }
};

Profile.propTypes = {
  entered : PropTypes.bool
};
