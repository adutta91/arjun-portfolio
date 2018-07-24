import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class ContentSection extends Component {
    render() {
        return (
            <div className={`content-section ${this.props.className || ''}`}>
                {this.props.children}
            </div>
        );
    }
};

ContentSection.propTypes = {
    className : PropTypes.string
};