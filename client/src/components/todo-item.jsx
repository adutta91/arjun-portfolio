import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded : false
        };
    }
    
    toggleExpand(e) {
        this.setState({ expanded : !this.state.expanded });
    }
    
    renderSkills() {
        if (!this.state.expanded) return null;
        return [
            <h4 key='0'>Expected skills:</h4>,
            <div className="skills" key='1'>
                {map(this.props.skills, (skill, idx) => {
                    return <div className="skill" key={idx}>{skill}</div>
                })}
            </div>
        ];
    }
    
    render() {
        return (
            <div className={`todo-item-wrapper ${this.state.expanded ? 'expanded' : ''}`}>
                <div className='card todo-item'>
                    <i className={`fas fa-caret-${this.state.expanded ? 'down' : 'up'} expand`} onClick={this.toggleExpand.bind(this)}/>
                    <h3 className='card-header title'>{this.props.title}</h3>
                    <div className="card-body description">
                        {this.props.description}
                        {this.state.expanded ? null : <div className="fadeout" />}
                    </div>
                    {this.renderSkills()}
                </div>
            </div>
        );
    }
};

TodoItem.propTypes = {
    title : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    skills : PropTypes.array.isRequired,
};