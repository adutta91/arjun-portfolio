import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// import particlesJS from 'particles.js';

import HeaderContainer from '../containers/header-container';
import FooterContainer from '../containers/footer-container';

import Landing from './landing';
import Projects from './projects';
import Todo from './todo';
import AboutMe from './aboutme';
import SectionHeader from './section-header';

import { setScrolled, toggleHeader, showFooter } from '../app/actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calculatingSpeed : false
    };
  }
  
  componentWillReceiveProps(next) {
    console.log(next.theme);
    $('body').removeClass();
    $('body').addClass(next.theme);
  }
  
  componentDidMount() {
    $(window).on('scroll', (e) => {
      let scroll = e.currentTarget.scrollY;
      
      if ((scroll + $(window).height()) == $(document).height()) {
        showFooter(true);
      } else {
        if (this.props.showFooter) showFooter(false);
      }
      
      
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
      if (diff > 300) toggleHeader(false);
      
      // going up
      if (diff < -400) toggleHeader(true);
      
      
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
      <div className='container-content-wrapper'>
        <HeaderContainer key={0}/>
        <Landing key={1} theme={this.props.theme} />
        
        {/* <SectionHeader title='About me' /> */}
        <AboutMe key={4} theme={this.props.theme} />
        
        {/* <SectionHeader title='Projects' /> */}
        <Projects key={2} theme={this.props.theme} />
        
        
        {/* <SectionHeader title='In the pipeline...' /> */}
        <Todo key={3} theme={this.props.theme} />
        
        <FooterContainer key={5}/>
      </div>
    )
  }
};

App.propTypes = {
  scrolled : PropTypes.bool,
  showFooter : PropTypes.bool,
  theme : PropTypes.string,
}