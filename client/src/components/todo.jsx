import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import TodoItem from './todo-item';

import { items } from '../app/todo';

export default class Todo extends Component {
    
    renderItems() {
        return _.map(items, (item, idx) => {
            return <TodoItem {...item} key={idx}/>;
        });
    }
    
    
    render() {
        return (
            <div className='container-content todo'>
                {this.renderItems()}
            </div>
        );
    }
};

Todo.propTypes = {
};
