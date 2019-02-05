import React from 'react';
import PropTypes from 'prop-types'

import HeaderContainer from '../containers/header-container';
import FooterContainer from '../containers/footer-container';

import ReactProjects from './react-projects';

const ProjectDescription = ({ match : { params : { page } } }) => {
    console.log('page *****---->>>', page);
    function renderProject() {
        switch (page) {
            case 'react-projects':
                return <ReactProjects />
            default:
                return null;
        }
    }
    
    return (
        <div className='container-content-wrapper'>
            <HeaderContainer />
            
            {renderProject()}
            
            <FooterContainer />
        </div>
    );
};

ProjectDescription.propTypes = {
    page : PropTypes.string
};

export default ProjectDescription;