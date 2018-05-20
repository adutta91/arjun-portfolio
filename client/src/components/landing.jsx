import React, { Component } from 'react';

export default class Landing extends Component {    
    state = {
        fade : false
    }
    
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fade : true });
        }, 1000);
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    
    render() {
        return (
            <div className='container-content landing'>
                <h1 className={`${this.state.fade ? 'in' : ''}`}> Find me where I love to be. </h1>
            </div>
        );
    }
};