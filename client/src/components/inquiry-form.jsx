import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class InquiryForm extends Component {
    state = {
        emailSubject : '',
        emailConent : '',
    }
    
    textChange(e) {
        let state = {};
        state[e.currentTarget.name] = e.currentTarget.value;
        
        this.setState(state);
    }
    
    render() {
        return (
            <div className='inquiry-form'>
                <div className="input-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name='emailSubject' id='emailSubject' value={this.state.emailSubject} onChange={this.textChange.bind(this)}/>
                </div>
                <div className="input-group">
                    <label htmlFor="subject">Message</label>
                    <input type="text" name='emailContent' id='emailContent' value={this.state.emailContent} onChange={this.textChange.bind(this)}/>
                </div>
                <a href={`mailto:arjundutta91@gmail.com?subject=${encodeURIComponent(this.state.emailSubject)}&body=${encodeURIComponent(this.state.emailContent)}`} onClick={this.mailTo} className='btn btn-primary'>Send Inquiry</a>
            </div>
        );
    }
};

InquiryForm.propTypes = {
};