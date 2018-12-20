import React, { Component } from 'react';
import PropTypes from 'prop-types'
import $ from 'jquery';

export default class Modal extends Component {
    wrapperClick(e) {
        let modal = document.getElementById('inquiry-modal');
        
        !modal.contains(e.target) && this.props.onClose();
    }
    
    render() {
        return (
            <div className={`modal-wrapper ${this.props.show ? 'in' : 'out'}`} onClick={this.wrapperClick.bind(this)}>
                <div id='inquiry-modal' className={`modal ${this.props.show ? 'in' : 'out'}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
};

Modal.propTypes = {
    show : PropTypes.bool.isRequired,
    onClose : PropTypes.func.isRequired
};