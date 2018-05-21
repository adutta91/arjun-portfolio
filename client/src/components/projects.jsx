import React, { Component } from 'react';
import { map } from 'lodash';

import { projects } from '../app/projects';

import ProjectItem from './project-item';

export default class Projects extends Component {
    render() {
        return (
            <div className='container-content projects'>
                {
                    map(projects, (project, idx) => {
                        return <ProjectItem key={idx} {...project} other={idx % 2 == 1} />
                    })
                }
            </div>
        );
    }
};
