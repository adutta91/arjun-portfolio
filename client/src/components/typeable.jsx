import React, { Component } from 'react';
import PropTypes from 'prop-types'


export default class Typeable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            pos : 0
        };
    }
    
    componentDidMount() {
        this.typingTimeout(this.state.pos + 1, this.props.speed, this.props.variance);
    }
    
    componentWillUnmount() {
        clearTimeout(this.timeout);
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
        if (this.props.text.slice(0, pos + 1)[pos] == ' ') speed = delay - variance;

        this.timeout = setTimeout(() => {
            this.setState({ pos });

            if (this.state.pos < this.props.text.length) {
                this.typingTimeout(pos + 1, delay, variance);
            } else {
               if (this.props.done) this.props.done();
            }
        }, speed);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    
    renderText() {
        let text = this.props.text.slice(0, this.state.pos);
        
        if (this.props.transformText) {
            return this.props.transformText(text);
        } else {
            return text;
        }
    }
    
    render() {
        return (
            <div className='typeable'>
                {this.renderText()}
                {this.props.showCursor ? <div className="cursor">|</div> : null}
            </div>
        );
    }
};

Typeable.propTypes = {
    text : PropTypes.string,
    speed : PropTypes.number,
    variance : PropTypes.number,
    done : PropTypes.func,
    transformText : PropTypes.func,
    showCursor : PropTypes.bool
};