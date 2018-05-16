import React, { Component } from 'react';

export default class Footer extends Component {
    openTab(url) {
        if(url) window.open(url, '_blank');
    }
    
    render() {
        return (
            <div id='contact-info' className='footer'>
                <div className="icons">
                    <i className="fab fa-2x fa-github" onClick={this.openTab.bind(this, 'https://github.com/adutta91')}/>
                    <i className="fab fa-2x fa-linkedin-in" onClick={this.openTab.bind(this, 'https://linkedin.com/in/arjundutta91/')}/>
                    <i className="far fa-2x fa-file-alt" onClick={this.openTab.bind(this, '')}/>
                </div>
                <a href="mailto:arjundutta91@gmail.com">arjundutta91@gmail.com</a>
            </div>
        );
    }
};
