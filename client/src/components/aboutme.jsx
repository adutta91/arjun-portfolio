import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { fetchSkills } from '../app/utils';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            inView : false
        };
    }
    
    componentWillMount() {
        fetchSkills();
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
    
    renderSummary() {
        return (
            <div className="summary">
                <h1 className='greeting'>Hello!</h1>
                <p>
                    I'm Arjun, a full-stack web developer based in Seattle, WA.
                </p>
                <p>
                    With an academic background in Psychology, I have a particular passion for building experiences that are intuitive and engaging. I find that puzzle of Human-Computer Interaction incredibly compelling and am always excited to work with like-minded people to create something awesome!
                </p>
            </div>
        )
    }
    
    renderSkillLogos() {
        return map(this.props.skills, (skill, idx) => {
            return (
                <div className="logo" key={skill.name}>
                    <div className="name">{skill.name}</div>
                    <img src={`/assets/logos/${skill.logo}`} />
                </div>
            )
        });
    }
    
    render() {
        return (
            <div className='content-section aboutme'>
                <div id='aboutme' className={`container-content aboutme ${this.props.theme}`}>
                    {this.renderSummary()}

                    <h3>My Toolkit</h3>
                    <div className="skill-logos">
                        {this.renderSkillLogos()}
                    </div>
                    <h4>ask me about more!</h4>
                </div>
            </div>
        );
    }
};

AboutMe.propTypes = {
    theme : PropTypes.string,
    pos : PropTypes.number,
    skills : PropTypes.array
};
