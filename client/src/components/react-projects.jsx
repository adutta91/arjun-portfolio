import React, { Component } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import { projects } from '../app/react-projects';

import ProjectItem from './project-item';

export default class ReactProjects extends Component {
    render() {
        return (
            <div id="projects" className='content-section projects'>
                <div className={`container-content projects ${this.props.theme}`}>
                    {map(projects, (project, idx) => {
                        return <ProjectItem key={idx} {...project} other={false} isMobile={this.props.isMobile}/>
                    })}
                </div>
            </div>
        );
    }
};


ReactProjects.propTypes = {
    theme: PropTypes.string,
    isMobile: PropTypes.bool,
};
