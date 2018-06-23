import React, { Component } from 'react';
import TreeScene from './scenes/tree-scene';

export default class Landing extends Component {    
    state = {
        fade : false,
        activeScene : null
    }
    
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fade : true });
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
    
    render() {
        return (
            <div className='container-content landing'>
                {/* <h1 className={`${this.state.fade ? 'in' : ''}`}> Find me where I love to be. </h1> */}
                {/* <div className={`buttons ${this.state.activeScene ? 'away' : ''}`}> */}
                <div className="buttons away">
                    <div className="coming-soon">Scenes Coming Soon</div>
                    <i className={`fas fa-2x fa-tree ${this.state.activeScene == 'tree' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'tree')}/>
                    <i className={`fas fa-2x fa-snowflake ${this.state.activeScene == 'snow' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'snow')}/>
                    <i className={`fas fa-2x fa-laptop ${this.state.activeScene == 'code' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'code')}/>
                    <i className={`fas fa-2x fa-coffee ${this.state.activeScene == 'coffee' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'coffee')}/>
                    <i className={`fas fa-2x fa-book ${this.state.activeScene == 'book' ? 'on' : 'off'} disabled`} onClick={this.setScene.bind(this, 'book')}/>
                </div>
                {this.renderScene()}
            </div>
        );
    }
};