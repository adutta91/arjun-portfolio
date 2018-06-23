import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grown : false,
            position: Math.random() * 100,
            height : 0
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            let state = {};
            state.height = Math.random() * 500;
            
            this.setState(state);
        }, Math.random() * 1000);
    }
    
    getStyle() {
        return {
            height : this.state.height + 'px',
            left : this.state.position + '%'
        };
    }
    
    render() {
        return (
            <div className="tree" style={this.getStyle()}>
                <div className="branches"></div>
                <div className="trunk"></div>
            </div>
        );
    }
};

Tree.propTypes = {};