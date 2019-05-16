import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash';
import { skillLogos } from '../app/app';

import Viewable from 'react-viewable';

const ProjectListItem = ({ project, idx }) => {
    let image = project.image ?
    <img className="image" src={`/assets/images/projects/${project.image}`} />
    : <img className="image" src='https://via.placeholder.com/200' />;
    
    const fadeDir = !!(idx % 2) ? 'right' : 'left';
    
    return (
        <div className='project-list-item'>
            <Viewable once delay={(250 * idx)} fadeDir={fadeDir}>
                { image }
            </Viewable>
            <Viewable once delay={(250 * (idx + 1))} fadeDir={fadeDir}>
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
            </Viewable>
        </div>
    );
}

ProjectListItem.propTypes = {
    project : PropTypes.object,
    idx : PropTypes.number,
}


export default ProjectListItem;