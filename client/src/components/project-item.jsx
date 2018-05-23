import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import { map } from 'lodash';
import { goTo } from '../app/app';

export default class ProjectItem extends Component {
    state = {
        showSampleCode : false
    }
    
    toggleSampleCode(val) {
        this.setState({ showSampleCode : val });
    }
    
    renderSampleTag() {
        if (this.state.showSampleCode) return null;
        
        return (
            <div className='sample-tag' onClick={this.toggleSampleCode.bind(this, true)}>
                <i className="fas fa-2x fa-chevron-left" />
                <div className='text'>Sample</div>
            </div>
        );
    }
    
    renderSampleText() {
        return (
            <div className={`sample-text ${this.state.showSampleCode ? 'open' : 'closed'}`} >
                <div className="btn btn-outline close" onClick={this.toggleSampleCode.bind(this, false)}>Close</div>
                <pre>
                    <code className="language-jsx">
                        {this.props.sampleCode}
                    </code>
                </pre>
            </div>
        );
    }
    
    renderSampleCode() {https://www.npmjs.com/package/react-revolver-menu
        if (!this.props.sampleCode) return null;
        
        return (
            <div className={`sampleCode ${this.state.showSampleCode ? 'open' : 'closed'}`}>
                {this.renderSampleTag()}
                {this.renderSampleText()}
            </div>
        );
    }
    
    renderLinks() {
        return map(this.props.links, (link, id) => {
            return <i key={id} className={`icon fab fa-2x fa-${id}`} onClick={goTo.bind(this, link)} />
        });
    }
    
    render() {
        return (
            <div className={`project-item ${this.props.other ? 'other' : ''}`}>
                <div className="content-wrapper">
                    <h3 className='title'>{this.props.title}</h3>
                    <div className="description">
                        {this.props.description}
                    </div>
                    <div className="skills">
                        <h4>Core Skills</h4>
                        <div className="skill-list">
                            {map(this.props.skills, (skill, idx) => {
                                return (
                                    <div className="skill" key={idx}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="links">
                        {this.renderLinks()}
                        {this.props.component || null}
                    </div>
                </div>
                {this.renderSampleCode()}
            </div>
        );
    }
};

ProjectItem.propTypes = {
    title : PropTypes.string.isRequired,
    links : PropTypes.object.isRequired,
    description : PropTypes.string.isRequired,
    skills : PropTypes.arrayOf(PropTypes.string).isRequired,
    date : PropTypes.string,
    sampleCode : PropTypes.string,
    other : PropTypes.bool,
    component : PropTypes.node,
};