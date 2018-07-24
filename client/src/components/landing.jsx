import React, { Component } from 'react';
import TreeScene from './scenes/tree-scene';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { map } from 'lodash';

import Typeable from './typeable';

import { toggleTheme } from '../app/actions';
import { landingMessage, parseText, scrollToId } from '../app/app';
import { parseJavascript } from '../app/javascript-text-highlighter';

export default class Landing extends Component {
    state = {
        fade1 : true,
        fade2 : true,
        showIndicator : false,
        activeScene : null
    }
    
    setScene(scene) {
        if (this.state.activeScene !== scene) this.setState({ activeScene : scene });
        else this.setState({ activeScene : null })
    }
    
    renderScene() {
        switch(this.state.activeScene) {
            case 'tree': return <TreeScene />
            default: return null;
        }
    }

    scrollToBottom() {
        $('html, body').animate({
            scrollTop: $('#contact-info').offset().top
        }, 500);
    }
    
    renderContent() {

        return (
            <div className={`landing-message ${this.state.fade1 ? 'in' : ''}`}>
                <Typeable
                    text={landingMessage}
                    speed={40}
                    variance={100}
                    done={() => { this.setState({ showIndicator: true }); }}
                    transformText={parseJavascript}
                    showCursor={false} />
            </div>
        );
    }
    
    render() {
        return (
            <div className='content-section landing'>
                <div className={`container-content landing ${this.props.theme}`}>
                    {this.renderContent()}
                    
                    <i className={`fas fa-2x fa-chevron-down ${this.state.showIndicator ? 'in' : 'out'}`} onClick={scrollToId.bind(this, 'aboutme')}/>                 
                </div>
            </div>
        );
    }
};

Landing.propTypes = {
    theme: PropTypes.string
};
