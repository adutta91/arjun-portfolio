import React, { Component } from 'react';
import TreeScene from './scenes/tree-scene';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { map } from 'lodash';

import { toggleTheme } from '../app/actions';
import { landingMessage, parseText} from '../app/app';

export default class Landing extends Component {    
    state = {
        fade1 : true,
        fade2 : true,
        showIndicator : false,
        activeScene : null,
        landingPos : 0,
    }
    
    componentDidMount() {
        let typingSpeed = 40;
        let variance = 100;
        
        this.typingTimeout(this.state.landingPos + 1, typingSpeed, variance);
    }
    
    typingTimeout(pos, delay, variance) {
        // determine whether offset is positive or negative
        let signVal = Math.random() < 0.5 ? -1 : 1;

        // offset to emulate variable differences between keystrokes
        let offset = (variance * Math.random()) * signVal;

        let speed = delay + offset;

        // sanity bounds: don't let it go too fast or slow
        if (speed < (delay - variance)) speed = delay - variance;
        if (speed > (delay + variance)) speed = delay + variance;
        
        // override for spaces - lowest possible speed given variance
        if (landingMessage.slice(0, pos + 1)[pos] == ' ') speed = delay - variance;
        
        this.timeout = setTimeout(() => {
            this.setState({ landingPos : pos });
            
            if (this.state.landingPos < landingMessage.length) {
                this.typingTimeout(pos + 1, delay, variance);
            } else {
                this.setState({ showIndicator : true });
            }
        }, speed);
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
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
        // NOTE - uncomment when ready
        // return null;
        let text = landingMessage.slice(0, this.state.landingPos);
    
        let code = text + '|';
        return (
            <div className={`landing-message ${this.state.fade1 ? 'in' : ''}`}>
                <pre>
                    <code className="language-jsx">
                        {code.trim()}
                    </code>
                </pre>
                <i className={`fas fa-2x fa-chevron-down ${this.state.showIndicator ? 'in' : 'out'}`} /> 
            </div>
        );
    
        // return (
        //     <h1 className={`${this.state.fade1 ? 'in' : ''}`}>
        //         Coming soon!
        //         <div className={`sub ${this.state.fade2 ? 'in' : ''}`}>
        //             Please <a href="#" onClick={this.scrollToBottom.bind(this)}>say hi</a> for more info!
        //         </div>
        //     </h1>
        // );
    }
    
    render() {
        return (
            <div className={`container-content landing ${this.props.theme}`}>
                {this.renderContent()}
                
                {/* <div className="buttons away">
                    <i className={`far fa-2x fa-sun ${this.props.theme == 'light' ? 'on' : 'off'}`} onClick={toggleTheme.bind(this, 'light')}/>
                    <i className={`far fa-2x fa-moon ${this.props.theme == 'dark' ? 'on' : 'off'}`} onClick={toggleTheme.bind(this, 'dark')}/>
                </div> */}
                
                {/* <div className="buttons away">
                    <div className="coming-soon">Scenes Coming Soon</div>
                    <i className={`fas fa-2x fa-tree ${this.state.activeScene == 'tree' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'tree')}/>
                    <i className={`fas fa-2x fa-snowflake ${this.state.activeScene == 'snow' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'snow')}/>
                    <i className={`fas fa-2x fa-laptop ${this.state.activeScene == 'code' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'code')}/>
                    <i className={`fas fa-2x fa-coffee ${this.state.activeScene == 'coffee' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'coffee')}/>
                    <i className={`fas fa-2x fa-book ${this.state.activeScene == 'book' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'book')}/>
                </div> */}
                {/* {this.renderScene()} */}
            </div>
        );
    }
};

Landing.propTypes = {
    theme: PropTypes.string
};
