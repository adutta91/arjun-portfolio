import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';

import projects from '../app/projects';

import ProjectListItem from './project-list-item';

const Projects = ({ isMobile, theme }) => {
    return (
        <div id="projects" className='content-section projects'>
            <div className={`container-content projects ${theme}`}>
<<<<<<< HEAD
                {map(projects, (project, idx) => <ProjectListItem key={project.id} project={project} />)}
=======
                {/* hi */}
>>>>>>> 20b31ee80a35e83470972578a3527cb71e16167d
            </div>
            
            <p className='more'>I would love to discuss more upon request!</p>
        </div>
    );
}

Projects.propTypes = {
    isMobile : PropTypes.bool,
    theme : PropTypes.string
}


export default Projects;