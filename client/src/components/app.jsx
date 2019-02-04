import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
// import particlesJS from 'particles.js';

import HeaderContainer from '../containers/header-container';
import FooterContainer from '../containers/footer-container';
import ProjectsContainer from '../containers/projects-container';
import LandingContainer from '../containers/landing-container';
import AboutMeContainer from '../containers/aboutme-container';

import Testimonials from './testimonials';

import { setScrolled, toggleHeader, showFooter, setMobile } from '../app/actions';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      calculatingSpeed : false,
      scroll : 0
    };
  }
  
  componentWillReceiveProps(next) {
    $('body').removeClass();
    $('body').addClass(next.theme);
  }
  
  componentDidMount() {
    $(window).on('scroll', (e) => {
      let scroll = e.currentTarget.scrollY;
      let state = { scroll };
      
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
        state.calculateScrollSpeed = true;
        this.calculateScrollSpeed(scroll);
      }
      this.setState(state);
    });
    
    this.checkWindowSize();
    $(window).on('resize', this.checkWindowSize.bind(this));
  }
  
  checkWindowSize() {
    if ($(window).width() <= 900 && !this.props.isMobile) {
      setMobile(true);
    } else if ($(window).width() > 900 && this.props.isMobile) {
      setMobile(false);
    }
  }
  
  calculateScrollSpeed(scroll1) {
    setTimeout(() => {
      let diff = $(window)[0].scrollY - scroll1;
      
      // scrolling down
      if (diff > 300) toggleHeader(false);
      
      // scrolling up
      if (diff < -400) toggleHeader(true);
      
      setTimeout(() => {
        this.setState({ calculateScrollSpeed : false });
      }, 1000);
    }, 250);
  }
  
  render() {
    return (
      <div className='container-content-wrapper'>
        <HeaderContainer key={0}/>
        
        <LandingContainer key={1} />
      
        <AboutMeContainer key={4} pos={this.state.scroll} />
      
        <Testimonials key={6} theme={this.props.theme}/>
      
        <ProjectsContainer key={2} />
        
        {/* <Todo key={3} theme={this.props.theme} /> */}
        
        <FooterContainer key={5}/>
      </div>
    )
  }
};

App.propTypes = {
  scrolled : PropTypes.bool,
  showFooter : PropTypes.bool,
  theme : PropTypes.string,
  isMobile : PropTypes.bool,
}