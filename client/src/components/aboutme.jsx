import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import Checkmark from './checkmark';
import ProgressBar from './progress-bar';

import { traits, skills, skillLogos } from '../app/app';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inView : false
        };
    }
    
    componentWillReceiveProps(next) {
        let offset = $('.aboutme').offset().top;
        let height = $('.aboutme').height();
        
        if (!this.state.inView && next.pos > (offset - (height / 2))) {
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
                {map(traits, (trait, idx) => {
                    return (
                        <div className="ability" key={idx}>
                            <Checkmark delay={1200 + (idx * 300)} success={trait.positive} />
                            <span>{trait.name}</span>
                        </div>
                    );
                })}
            </div>
        )
    }
    
    renderSkills() {
        if (!this.state.inView) return null;
        
        return (
            <div className="container-skills">
                {map(skills, (skill, idx) => {
                    return (  
                        <div className="skill" key={idx}>
                            <span>{skill.name}</span>
                            <div className='desc'>
                                <ProgressBar progress={skill.proficiency} delay={idx * 200} />
                                <span>{skill.label}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
    
    renderSummary() {
        return (
            <div className="summary">
                <h1 className='greeting'>Hello!</h1>
                <p>
                    I'm Arjun, a full-stack web developer based in Seattle, WA.
                </p>
                <p>
                    I've been coding for well over 2 years now, and with an academic background in Psychology, I have a particular
                    passion for building experiences that are intuitive and engaging. I find that puzzle of Human-Computer
                    Interaction incredibly compelling and am always excited to work with like-minded people to create something awesome!
                </p>
            </div>
        )
    }
    
    renderSkillLogos() {
        return map(skillLogos, (skill, idx) => {
            return <img key={skill.name} src={`/assets/logos/${skill.file}`} className='logo'/>
        });
    }
    
    render() {
        return (
            <div className='content-section aboutme'>
                <div id='aboutme' className={`container-content aboutme ${this.props.theme}`}>
                    {this.renderSummary()}
                    {/* <div className={`skills-wrapper ${this.state.inView ? 'inView' : ''}`}>
                        {this.renderSkills()}
                        {this.renderAbilities()}
                    </div> */}
                    <h3>My Toolkit</h3>
                    <div className="skill-logos">
                        {this.renderSkillLogos()}
                    </div>
                    <h4>and more to come!</h4>
                </div>
            </div>
        );
    }
};

AboutMe.propTypes = {
    theme : PropTypes.string,
    pos : PropTypes.number
};