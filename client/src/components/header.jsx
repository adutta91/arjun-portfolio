import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';


export default class Header extends Component {
    getClassname() {
        let className = 'header';
        
        if (this.props.scrolled) className += ' scrolled';
        if (this.props.show) className += ' fade-in';
        if (!this.props.show) className += ' fade-out up';
        
        return className;
    }
    
    scrollToBottom() {
        $('html, body').animate({
            scrollTop: $('#contact-info').offset().top
        }, 500);
    }
     
    render() {
        return (
            <div className={this.getClassname()}>
                <h3>Arjun Dutta</h3>
                <a href="#" onClick={this.scrollToBottom.bind(this)}>Contact Me</a>
            </div>
        );
    }
};

Header.propTypes = {
    scrolled : PropTypes.bool,
    show : PropTypes.bool,
};
