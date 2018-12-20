import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { cloneDeep, map } from 'lodash';
import $ from 'jquery';
import { openTerminal, setModal } from '../app/actions';

import InquiryForm from './inquiry-form';

export default class Terminal extends Component {
    
    state = {
        command : '',
        previousCommands : [],
        emailSubject : '',
        emailContent : '',
    }
    
    componentDidUpdate(prev) {
        if (!prev.show && this.props.show) {
            $('#terminal-input').focus();
        }
    }
    
    onTextChange(e) {
        this.setState({ command : e.currentTarget.value });
    }
    
    checkEnter(e) {
        if (e.key === 'Escape') {
            openTerminal(false);
            
            return this.setState({
                command: '',
                previousCommands: []
            });
        } else if (e.key !== 'Enter') {
            return;
        }

        let previousCommands = cloneDeep(this.state.previousCommands);
        previousCommands.push({
            id: (Math.random() * 100000000000) / 10000,
            text: this.state.command,
            author: 'user'
        });
        
        // add response to command history if applicable
        let response = this.parseCommand(this.state.command);
        if (response) previousCommands.push({
            id: (Math.random() * 100000000000) / 10000,
            text: response,
            author: 'system'
        });
        
        this.setState({ command : '', previousCommands });
    }
    
    parseCommand(command) {
        switch(command) {
            case '':
                return '';
            case 'submit inquiry':
                setModal({
                    show : true,
                    content : <InquiryForm />
                });
                return 'Inquiry submitted';
            default:
                return `Unrecognized command "${command}"`;
        }
    }
    
    renderPreviousCommands() {
        return map(this.state.previousCommands, (command, idx) => {
            return (
                <div className={`previous-command ${command.author}`} key={command.id}>
                    {command.author === 'user' ? '$user: ' : ''} {command.text}
                </div>
            );
        });
    }
    
    renderContent() {
        if (this.props.show) {
            return (
                <div className="content">
                    <div className="previous">
                        {this.renderPreviousCommands()}
                    </div>
                    <div className="main-input">
                        <div>></div>
                        <input id='terminal-input' value={this.state.command} type="text" onChange={this.onTextChange.bind(this)} onKeyDown={this.checkEnter.bind(this)}/>
                    </div>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div className={`terminal ${this.props.show ? 'in' : 'out'}`} key='0'>
                {this.renderContent()}
            </div>
        );
    }
};

Terminal.propTypes = {
    show : PropTypes.bool
};