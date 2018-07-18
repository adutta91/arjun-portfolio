import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            display : false
        };
    }
    
    componentDidMount() {
        setTimeout(() => { this.setState({ display : true}); }, this.props.delay);
    }
    
    render() {
        return (
            <div className='container-progress'>
                <div className="progress" style={{ width : `${this.state.display ? this.props.progress : 0}%` }}></div>
            </div>
        );
    }
};

ProgressBar.protoTypes = {
    progress : PropTypes.number.isRequired,
    delay : PropTypes.number.isRequired
};
