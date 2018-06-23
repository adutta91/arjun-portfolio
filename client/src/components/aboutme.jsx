import React, { Component } from 'react';

import Clipboard from './clipboard.jsx';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          displayStringMap : {
              summary : 'Summary',
              education : 'Education',
              experience : 'Experience'
          },
          list : {
              summary : [],
              education : [],
              experience : []
          },
          activeList : 'summary'  
        };
    }
    
    selectList(list) {
        this.setState({ activeList : list });
    }
    
    render() {
        return (
            <div className='container-content aboutme'>
                <div className="buttons">
                    <i className={`far fa-2x fa-user ${this.state.activeList == 'summary' ? 'active' : ''}`} onClick={this.selectList.bind(this, 'summary')} />
                    <i className={`fas fa-2x fa-graduation-cap ${this.state.activeList == 'education' ? 'active' : ''}`} onClick={this.selectList.bind(this, 'education')} />
                    <i className={`far fa-2x fa-keyboard ${this.state.activeList == 'experience' ? 'active' : ''}`} onClick={this.selectList.bind(this, 'experience')} />
                </div>
                <Clipboard title={this.state.displayStringMap[this.state.activeList]} list={this.state.list[this.state.activeList]} /> 
            </div>
        );
    }
};