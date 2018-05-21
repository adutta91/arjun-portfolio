import React, { Component } from 'react';
import ReactRevolverMenu from 'react-revolver-menu';

export default class MenuDemo extends Component {
    state = {
        show : false
    }

    toggleModal(show, e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.setState({ show });
    }
    
    render() {
        return (
            <div className="modal-demo">
                <div className={`modal-wrapper ${this.state.show ? 'open' : 'closed'}`} onClick={this.toggleModal.bind(this, false)}>
                    <div className="modal-content">
                        <ReactRevolverMenu {...this.props} />
                    </div>
                </div>
                <div className="btn btn-outline" onClick={this.toggleModal.bind(this, true)}>Demo</div>
            </div>
        );
    }
};