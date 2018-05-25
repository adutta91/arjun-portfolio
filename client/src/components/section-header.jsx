import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SectionHeader extends Component {
    render() {
        return (
            <div className="section-header">
                {this.props.title}
            </div>
        );
    }
};

SectionHeader.propTypes = {
    title : PropTypes.string.isRequired
}
