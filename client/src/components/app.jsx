import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Projects from './projects';
import Todo from './todo';
import AboutMe from './aboutme';
import Footer from './footer';

export default class App extends Component {
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
        <Header key={0}/>
        <Projects key={1} />
        <Todo key={2} />
        <AboutMe key={3} />
        <Footer key={4}/>
      </div>
    )
  }
};

App.propTypes = {
};
