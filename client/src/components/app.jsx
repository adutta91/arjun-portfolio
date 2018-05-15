import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import HeaderContainer from '../containers/header-container';

import Landing from './landing';
import Projects from './projects';
import Todo from './todo';
import AboutMe from './aboutme';
import Footer from './footer';

import { setScrolled, toggleHeader } from '../app/actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calculatingSpeed : false
    };
  }
  
  componentDidMount() {
    $(window).on('scroll', (e) => {
      let scroll = e.currentTarget.scrollY;
      
      if (scroll && !this.props.scrolled) setScrolled(true);
      else if (!scroll) {
        setScrolled(false);
        toggleHeader(true);
      }
      
      if (!this.state.calculatingSpeed) {
        this.setState({ calculateScrollSpeed : true });
        this.calculateScrollSpeed(scroll);
      }
    });
  }
  
  calculateScrollSpeed(scroll1) {
    setTimeout(() => {
      let diff = $(window)[0].scrollY - scroll1;
      
      // going down
      if (diff > 200) toggleHeader(false);
      
      // going up
      if (diff < -300) toggleHeader(true);
      
      
      setTimeout(() => {
        this.setState({ calculateScrollSpeed : false });
      }, 1000);
    }, 250);
  }
  
  render() {
    if (window.innerWidth < 1048) return (
      <div>
        Oops! The mobile site is under construction...
        <br />
        Please come back soon, or visit the site on device with a wider screen.
        <br /> <br />
        Sorry for the inconvenience! Working on making this great! :)
        <br /> <br />
        Thanks!
        <br />
        Arjun
      </div>
    );

    return (
      <div>
        <HeaderContainer key={0}/>
        <Landing key={1} />
        <Projects key={2} />
        <Todo key={3} />
        <AboutMe key={4} />
        <Footer key={5}/>
      </div>
    )
  }
};

App.propTypes = {
  scrolled : PropTypes.bool,
}