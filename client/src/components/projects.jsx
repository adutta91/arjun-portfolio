import React, { Component } from 'react';
import { map } from 'lodash';
import PropTypes from 'prop-types';

import { projects } from '../app/projects';

import ProjectItem from './project-item';

export default class Projects extends Component {
    render() {
        return (
            <div className='content-section projects'>
                <div className={`container-content projects ${this.props.theme}`}>
                    {
                        map(projects, (project, idx) => {
                            return <ProjectItem key={idx} {...project} other={idx % 2 == 1} />
                        })
                    }
                </div>
            </div>
        );
    }
};


Projects.propTypes = {
    theme: PropTypes.string
};
