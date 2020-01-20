import React from 'react';

import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        // map over the list in state and return a todoitem comp for each
        <div className="todo-container">
            {props.list.map(item =>{
            return <div>{item.name}</div>
            })}
        </div>
    );
}

export default TodoList;