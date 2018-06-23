import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Clipboard extends Component {
    render() {
        return (
            <div className={`container-clipboard`}>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
};

Clipboard.protoTypes = {
    title : PropTypes.string,
    list : PropTypes.array
};
