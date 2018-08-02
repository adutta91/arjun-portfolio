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
        title: 'JavaScript Semantic Parsing',
        skills: ['JavaScript', 'HTML/CSS'],
        links: {},
        description: `
            A function that takes a string as a parameter and returns HTML with semantic classes for each word based on the word and its context.
            I built this for the mock editor above, and found it to be quite the interesting challenge. The logic in this code handles the most basic semantic highlighting as seen in a modern text editor, and is easily extensible. I look forward to developing it further to make it an even more robust JavaScript Semantic Parser.
        `,
        sampleCode: `export const parseJavascript = (text, opt) => {
    let lines = text.split('\n');
    
    return (
        <div className='parsed-code'>
            {map(lines, (line, idx) => {
                return (
                    <div className="line-wrapper" key={idx}>
                        {opt.showLineNumbers ? <div className="line-number">{idx + 1}</div> : null}
                        <div className="line" key={idx}>
                            {parseLine(line, idx == (lines.length - 1), opt)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


function parseLine(line, isCurrent, opt) {
    let words = line.split(' ');
    
    // if line is commented
    if (commentCheck(line)) return (
        <span className="comment">
            {map(words, (word, idx) => {
                
                if (word == '') {
                    return <span key={idx} className='space' ></span>;
                } else if (isLink(word)) {
                    return parseLink(word, idx);
                } else {
                    return <span key={idx} className='word' >{word}</span>
                }
                
            })}
            {isCurrent && opt.showCursor ? <span className="cursor">|</span> : null}
        </span>
    );

    let result = map(words, (word, idx) => {
        if (word == '') return <span key={idx} className='space' ></span>;
        else return parseWord(line, word, idx);
    });
    
    // add cursor to end
    if (isCurrent) {
        result.push(<span key={'cursor'}className="cursor">|</span>);
    }
    
    return result;
};

function parseWord(line, word, idx) {
    if (isLink(word)) {
        return parseLink(word, idx);
    }
    
    // remember if word has punctuation
    let punctuation = punctuationMap[word[word.length - 1]] ? word[word.length - 1] : '';
    
    // remove semicolon while searching for className
    let trimmed = word.trim().split(punctuation).join('');

    // look up class name in map first,
    // if not found, run through other checks to find className
    let className = classNameLookup[trimmed] || findClassName(line, trimmed, idx);

    // if accessing a property on an object
    if (word.split('.').length > 1 && !stringCheck(line, word, idx)) {
        return [
            <span key={\`\${ idx } - 0\`} className='word object'>
                {word.split('.')[0]}
                <span className="punctuation">.</span>
            </span>,
            parseWord(line, word.split('.')[1], \`\${ idx } - 1\`)
        ];
    }
    
    // special case for functions
    if (className == 'function') {
        return (
            <span className='word' key={idx}>
                <span className='function'>{trimmed.slice(0, trimmed.indexOf('('))}</span>
                <span>{trimmed.slice(trimmed.indexOf('('))}</span>
                {punctuation ? <span className="punctuation">;</span> : null}
            </span>
        );
    }
    
    // special case for classes
    if (className == 'class') {
        return (
            <span className='word' key={idx}>
                <span className='class'>{trimmed.slice(0, trimmed.indexOf('('))}</span>
                <span>{trimmed.slice(trimmed.indexOf('('))}</span>
                {punctuation ? <span className="punctuation">;</span> : null}
            </span>
        );
    }
    
    return (
        <span key={idx} className={\`word \${ className }\`}>
            {trimmed}
            {punctuation ? <span className={punctuationClassName(line, word, idx)}>{punctuation}</span> : null}
        </span>
    );
        
};

function findClassName(line, word, idx) {
    if (numberCheck(word)) return 'number';
    if (classCheck(line, word, idx)) return 'class';
    if (functionCheck(line, word, idx)) return 'function';
    if (stringCheck(line, word, idx)) return 'string';
    if (importCheck(line, word, idx)) return 'import';
    else return ''
};

function punctuationClassName(line, word, idx) {
    let className = 'punctuation';
    
    // if word is in string and not the last word, punctuation is in string
    if (stringCheck(line, word, idx)) {
        if (word[word.length - 2] !== '"' && word[word.length - 2] !== '\'') {
            className += ' string';
        }
    }
    
    return className;
}


let classNameLookup = {
    'let' : 'variable',
    'var' : 'variable',
    'const' : 'variable',
    'function' : 'variable',
    'import' : 'variable',
    'from' : 'variable',
    'return' : 'variable',
    'new' : 'variable',
    '=>' : 'function',
    '=' : 'operation',
    ':' : 'operation',
    '+' : 'operation',
    '-' : 'operation',
    '/' : 'operation',
    '"' : 'string',
    '\\'' : 'string'
};

// JSON for ease of look up
let punctuationMap = {
    ',' : true,
    ';' : true
};

// checks if word is a function definition
let functionCheck = (line, word, idx) => {
    if (word.indexOf('(') !== -1 && word.indexOf(')') !== -1) return true;
    else return false;
};

// checks if word is a class
let classCheck = (line, word, idx) => {
    let parts = line.split(' ');
    
    if (parts[parts.indexOf(word) - 1] == 'new') return true;
    else return false;
}

// checks if word is a class
let stringCheck = (line, word, idx) => {
    // easy check for single word or words on the edge of strings
    if (word.indexOf('\'') !== -1 || word.indexOf('"') !== -1) {
        return true;
    } else {
        // traverse through line to check if word appears during an open string
        let parts = line.split(' ');
        let isString = false;

        for (let i = 0; i < parts.length; i++) {
            // if word is found, then break with current value of isString
            if (parts[i] == word) {
                break;
            } else if (parts[i].indexOf('\'') !== -1 || parts[i].indexOf('"') !== -1) {
                // found a string bound, so toggle isString value
                isString = !isString;
            }
        }
        
        return isString;
    }
}

// checks if word is a number
let numberCheck = (word) => {
    if (parseInt(word) || parseInt(word) === 0) return true;
    else return false;
}

// checks if word is an import
let importCheck = (line, word) => {
    if (line.split(' ')[0] == 'import' && line.split(' ')[1] == word) {
        return true;
    } else {
        return false;
    }

}

// checks if word is an import statement
let commentCheck = (line) => {
    let check = clone(line);

    if (check.trim().slice(0, 2) == '//') return true;
    else return false;
}

function isLink(word) {
    if (word.indexOf(linkIdentifier) !== -1) {
        return true;
    } else {
        return false;
    }
}

function parseLink(word, key) {
    let linkParts = word.split(linkIdentifier).join('').split('>');
    
    // placeholders until full link is parsed
    if (linkParts.length < 2) linkParts = ['', ''];
    
    return (
        <span key={key} className="word link" onClick={scrollToId.bind(this, linkParts[1])}>{linkParts[0].split('_').join(' ')}</span>
    );
}`
    },
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
