import React from "react";

import TodoItem from "./TodoItem";

function TodoList(props) {
    console.log(props.list)
  return (
    // map over the list in state and return a todoitem comp for each
    
    <div className="todo-container">
      {props.list.map(item => {
        if (item.completed == true) {
          return (
            <div
              className="completed"
              id={item.id}
              onClick={props.handleComplete}
            >
              {item.name}
            </div>
          );
        }
        return (
          <div id={item.id} onClick={props.handleComplete}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
