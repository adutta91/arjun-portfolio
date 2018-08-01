import React from 'react';
import { map, clone } from 'lodash';

import { scrollToId, linkIdentifier } from './app';

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
    '\'' : 'string'
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

// checks if word is an import
let commentCheck = (line) => {
    let check = clone(line);

    if (check.trim().slice(0, 2) == '//') return true;
    else return false;
}


export const parseJavascript = (text, showCursor) => {
    let lines = text.split('\n');
    
    return (
        <div className='parsed-code'>
            {map(lines, (line, idx) => {
                return (
                    <div className="line-wrapper" key={idx}>
                        <div className="line-number">{idx + 1}</div>
                        <div className="line" key={idx}>
                            {parseLine(line, idx == (lines.length - 1))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};


function parseLine(line, isCurrent) {
    let words = line.split(' ');
    
    // if line is commented
    if (commentCheck(line)) return (
        <span className="comment">
            {map(words, (word, idx) => {
                if (word == '') return <span key={idx} className='space' ></span>;
                else if (isLink(word)) return parseLink(word, idx);
                else return <span key={idx} className='word' >{word}</span>
            })}
            {isCurrent ? <span className="cursor">|</span> : null}
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
            <span key={`${idx}-0`} className='word object'>
                {word.split('.')[0]}
                <span className="punctuation">.</span>
            </span>,
            parseWord(line, word.split('.')[1], `${idx}-1`)
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
        <span key={idx} className={`word ${className}`}>
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
}