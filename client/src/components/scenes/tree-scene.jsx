import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tree from './tree'

export default class TreeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numTrees : 50
        };
    }
    
    renderTrees() {
        let trees = [];
        
        for (let i = 0; i < this.state.numTrees; i++) {
            trees.push(<Tree key={i} />)
        }
        
        return trees;
    }
    
    render() {
        return (
            <div className="scene tree">
                {this.renderTrees()}
            </div>
        );
    }
};

TreeScene.propTypes = {

};