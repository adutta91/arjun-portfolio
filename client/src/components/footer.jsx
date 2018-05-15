import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className="email">Email: <a href="mailto:arjundutta91@gmail.com">arjundutta91@gmail.com</a></div>
                <div className="icons">
                    <i className="fab fa-github" />
                    <i className="fab fa-linkedin-in" />
                    <i className="far fa-file-alt" />
                </div>
            </div>
        );
    }
};

Footer.propTypes = {
};
