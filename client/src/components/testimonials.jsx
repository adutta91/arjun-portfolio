import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { map } from 'lodash';

import { testimonials } from '../app/app';

export default class Testimonials extends Component {
    renderTestimonials() {
        return map(testimonials, (testimonial, idx) => {
            return (
              <div className='testimonial' key={idx}>
                <i className="fas fa-2x fa-quote-right"></i>

                <div className="text">
                    {testimonial.text}
                </div>
                <div className="from">
                    {testimonial.from}
                </div>
              </div>  
            );
        });
    }
    
    render() {
        return (
            <div id="testimonials" className='content-section testimonials'>
                <div className={`container-content testimonials ${this.props.theme}`}>
                    {this.renderTestimonials()}
                </div>
            </div>
        );
    }
};

Testimonials.propTypes = {
    theme : PropTypes.string
};