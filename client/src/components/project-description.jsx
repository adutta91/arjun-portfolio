import React from 'react';
import PropTypes from 'prop-types'

import HeaderContainer from '../containers/header-container';
import FooterContainer from '../containers/footer-container';

const ProjectDescription = ({ match : { params : { page } } }) => {
    console.log('page *****---->>>', page);
    return (
        <div className='container-content-wrapper'>
        
            <HeaderContainer />
            
            
            
            <FooterContainer />
        </div>
    );
};

ProjectDescription.propTypes = {
    page : PropTypes.string
};

export default ProjectDescription;