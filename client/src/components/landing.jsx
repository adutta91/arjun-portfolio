import React, { Component } from 'react';
import TreeScene from './scenes/tree-scene';
import PropTypes from 'prop-types';
import $ from 'jquery';

import { toggleTheme } from '../app/actions';

export default class Landing extends Component {    
    state = {
        fade1 : false,
        fade2 : false,
        activeScene : null
    }
    
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fade1 : true });
            clearTimeout(this.timeout);
            
            this.timeout = setTimeout(() => {
               this.setState({ fade2 : true }) ;
            }, 1000);
        }, 1000);
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
        
        return (
            <h1 className={`${this.state.fade1 ? 'in' : ''}`}>
                Welcome!
            </h1>
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
