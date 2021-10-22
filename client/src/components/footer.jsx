import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { goTo } from '../app/app.js';

export default class Footer extends Component {
    render() {
        return (
            <div id='contact-info' className='footer'>
            {/* <div id='contact-info' className={`footer ${this.props.showFooter ? '' : 'out'}`}> */}
                <div className="icons">
                    <i className="fab fa-2x fa-github" onClick={goTo.bind(this, 'https://github.com/adutta91')} />
                    <i className="fab fa-2x fa-linkedin-in" onClick={goTo.bind(this, 'https://linkedin.com/in/arjundutta91/')} />
                    <i className="far fa-2x fa-file-alt" onClick={goTo.bind(this, '/assets/documents/arjun_dutta_cv.pdf')} />
                </div>
                <a href="mailto:arjundutta91@gmail.com">arjundutta91@gmail.com</a>
            </div>
        );
    }
};

Footer.protoTypes = {
    showFooter: PropTypes.bool,    
};
