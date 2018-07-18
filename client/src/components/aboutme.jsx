import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

import Checkmark from './checkmark';
import ProgressBar from './progress-bar';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inView : false
        };
    }
    
    componentWillReceiveProps(next) {
        let offset = $('.aboutme').offset().top;
        if (!this.state.inView && next.pos > (offset / 2)) {
            // clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({ inView : true });
            }, 200);
        }
    }
    
    renderAbilities() {
        if (!this.state.inView) return null;
        
        return (
            <div className="container-abilities">
                <div className="ability">
                    <Checkmark delay={0} success={true} />
                    <span>Hard Working</span>
                </div>
                <div className="ability">
                    <Checkmark delay={400} success={true} />
                    <span>Enthusiastic</span>
                </div>
                <div className="ability">
                    <Checkmark delay={800} success={true} />
                    <span>Collaborative</span>
                </div>
                <div className="ability">
                    <Checkmark delay={1200} success={true} />
                    <span>Friendly</span>
                </div>
                <div className="ability">
                    <Checkmark delay={2000} success={false} />
                    <span>Good Dancer</span>
                </div>
            </div>
        )
    }
    
    renderSkills() {
        if (!this.state.inView) return null;
        
        return (
            <div className="container-skills">
                <div className="skill">
                    <ProgressBar progress={90} delay={0} />
                    <span>React</span>
                </div>
                <div className="skill">
                    <ProgressBar progress={85} delay={200} />
                    <span>Redux</span>
                </div>
                <div className="skill">
                    <ProgressBar progress={85} delay={600} />
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <ProgressBar progress={83} delay={600} />
                    <span>HTML/CSS</span>
                </div>
                <div className="skill">
                    <ProgressBar progress={80} delay={1000} />
                    <span>MySQL</span>
                </div>
                <div className="skill">
                    <ProgressBar progress={80} delay={1400} />
                    <span>NodeJS</span>
                </div>
            </div>
        );
    }
    
    render() {
        return (
            <div className={`container-content aboutme ${this.props.theme} ${this.state.inView ? 'inView' : ''}`}>
                {this.renderAbilities()}
                {this.renderSkills()}
            </div>
        );
    }
};

AboutMe.propTypes = {
    theme : PropTypes.string,
    pos : PropTypes.number
};