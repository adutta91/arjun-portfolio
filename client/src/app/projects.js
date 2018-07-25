import React from 'react';
import MenuDemo from '../components/demos/revolver-menu.jsx'
// items: PropTypes.arrayOf(PropTypes.shape({
//     type: PropTypes.oneOf(['img', 'icon', 'text']).isRequired,
//     text: PropTypes.string,
//     src: PropTypes.string,
//     icon: PropTypes.string,
//     popover: PropTypes.string,
//     popoverPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
//     items: PropTypes.arrayOf(PropTypes.object),
//     onClick: PropTypes.func,
//     className: PropTypes.string
// })).isRequired,
//     diameter     : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//         animateDelay : PropTypes.number,
//             animateStyle : PropTypes.oneOf(['radiate', 'swing']),
//                 border       : PropTypes.oneOf(['dashed', 'solid', 'none'])
const revolverMenuProps = {
    diameter : 10,
    animateDelay : 10,
    animateStyle : 'radiate',
    border : 'none',
    items : [
        {
            type : 'text',
            text : 'Hallo',
            items : [
                {
                    type : 'text',
                    text : 'Woah'
                },
                {
                    type : 'text',
                    text : 'This'
                },
                {
                    type : 'text',
                    text : 'Is'
                },
                {
                    type : 'text',
                    text : 'Pretty'
                },
                {
                    type : 'text',
                    text : 'Cool'
                },
            ]
        },
        {
            type : 'text',
            text : 'There',
            items: [
                {
                    type: 'text',
                    text: 'Let\'s'
                },
                {
                    type: 'text',
                    text: 'Go'
                },
                {
                    type: 'text',
                    text: 'Skiing'
                },
            ]
        },
        {
            type : 'text',
            text : 'Friend',
            items: [
                {
                    type: 'text',
                    text: 'How'
                },
                {
                    type: 'text',
                    text: 'Are'
                },
                {
                    type: 'text',
                    text: 'You'
                },
                {
                    type: 'text',
                    text: 'Doing?'
                },
            ]
        },
    ]
};

export const projects = [
    {
        title: 'React Typeable',
        skills: ['ReactJS', 'JavaScript', 'HTML/CSS', 'NPM'],
        links: {
            github : 'https://github.com/adutta91/react-typeable',
            npm : 'https://www.npmjs.com/package/react-typeable',
        },
        description: `
            A React component built to emulate typing text. It's very lightweight, but versatile, allowing for text transformation such as text highlighting, as well as controlling typing speed and variance between keystrokes to more accurately mimic natural typing. The component recursively sets timeouts to render each character. 
        `,
        sampleCode: `import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Typeable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pos: 0
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
                {this.props.showCursor ? <span className="cursor">|</span> : null}
            </div>
        );
    }
};

Typeable.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
    variance: PropTypes.number,
    done: PropTypes.func,
    transformText: PropTypes.func,
    showCursor: PropTypes.bool
};`
    },
    {
        title: 'React Revolver Menu',
        skills: ['ReactJS', 'JavaScript', 'HTML/CSS', 'NPM'],
        links: {
            github : 'https://github.com/adutta91/react-revolver-menu',
            npm : 'https://www.npmjs.com/package/react-revolver-menu',
        },
        component: <MenuDemo {...revolverMenuProps} />,
        description: `
            A circular menu I built using React that is available as an NPM module. The idea is an arbitrarily deep menu arranged in a circle, with the option to go back to a higher level in the menu through a button in the center. I had a lot of fun figuring out the challenge of making it as dynamic as possible - allowing for any number
            of items while still being symmetrically displayed, giving the implementor options for types of menu items (icon, image or text), as well as a couple different animations. 
        `,
        sampleCode: `/*
    The following are few method definitions on the ReactRevolverMenu react component class.
    Specifically, these deal with rendering the menu items to display. The challenge in
    this part of the component was managing the history of the menu's interactions such
    that the previous set of items could be displayed again by clicking the back button.
    Additionally, these functions render different items based on the specified type of
    the menu item, as well as add specific inline styles depending on the user's choice
    of enumerable menu animation styles.
*/


renderItems() {
    let items = this.props.items;
    
    // if on a sub-set of items as maintained by state
    if (this.state.subItems.length) items = this.state.subItems;
    
    return _.map(items, (item, idx) => {
        return this.renderItem(item, idx);
    });
}

renderItem(item, idx) {
    
    // stagger render delay based on number of items
    // to evenly render in sequence around the circle
    
    let interval;
    if (this.state.subItems.length) {
        interval = parseInt(360 / this.state.subItems.length)
    } else {
        interval = parseInt(360 / this.props.items.length);
    }
    
    // get any animation styles as provided by props
    const style = this.getStyle(item, interval, idx);
    
    
    // construct the props for this specific menu-item
    let additionalClasses = \`\${ item.className} \${ this.state.showStyle[idx] ? 'show' : '' }\`
    const props = {
        key          : idx,
        className    : \`menu-item \${additionalClasses}\`,
        onClick      : this.itemClick.bind(this, item, idx),
        style        : style,
        onMouseOver  : this.setOnHover.bind(this, idx, true),
        onMouseLeave : this.setOnHover.bind(this, idx, false)
    };
    
    // return a node based on the menu-item type
    return this.itemSwitchBoard(item, props, idx);
}

itemSwitchBoard(item, props, idx) {
    let popover = this.renderPopover(item, idx);
    
    switch(item.type) {
        case 'img':
            return <div {...props} ><img src={item.src} />{popover}</div>;
        case 'text':
            return <div {...props}>{item.text}{popover}</div>;
        case 'icon':
            return <div {...props}><i className={item.icon} />{popover}</div>;
    }
}`
    },
];
