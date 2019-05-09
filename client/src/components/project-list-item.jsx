import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';
import { skillLogos } from '../app/app';

const ProjectListItem = ({ project }) => {
    let image = project.image ?
    <img className="image" src={`/assets/images/projects/${project.image}`} />
    : <img className="image" src='https://via.placeholder.com/200' />;
    
    
    return (
        <div className='project-list-item'>
            { image }
            
            <div className="content">
                <h4 className='name'>
                    {project.name}
                </h4>
                
                <p className='description'>
                    {project.description}
                </p>
                
                
                <div className="technologies">
                    {map(project.technologies, tech => {
                        return <img key={tech} className='tech-icon' src={`/assets/logos/${skillLogos[tech].file}`} />
                    })}
                </div>
            </div>
        </div>
    );
}

ProjectListItem.propTypes = {
    project : PropTypes.object,
}


export default ProjectListItem;