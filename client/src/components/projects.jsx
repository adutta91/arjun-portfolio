import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ isMobile, theme }) => {
    return (
        <div id="projects" className='content-section projects'>
            <div className={`container-content projects ${theme}`}>
                hi
            </div>
        </div>
    );
}

Projects.propTypes = {
    isMobile : PropTypes.bool,
    theme : PropTypes.string
}


export default Projects;