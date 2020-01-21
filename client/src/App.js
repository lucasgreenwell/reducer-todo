import React, { useState, useReducer } from "react";
import "./App.css";

//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import DeleteButton from "./components/DeleteButton";

import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e, name) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_ITEM",
      payload: { name: name, id: Date.now(), completed: false }
    });
  };

  const handleComplete = e => {
    //needs to map through state array
    let changedState = state.map(item => {
      if (item.id == e.target.id) {
        return { ...item, completed: true };
      }
      return item;
    });
    dispatch({ type: "TOGGLE_COMPLETED", payload: changedState });
  };

  const handleDelete = () => {
    //needs to filter through state array
    //returns all items with completed == false
    let changedState = state.filter(item => {
        return item.completed ==false;
    })
    dispatch({type: 'DELETE_COMPLETED', payload: changedState})
  }

  return (
    <div className="App">
      <TodoList list={state} handleComplete={handleComplete} />
      <TodoForm handleSubmit={handleSubmit} />
      <DeleteButton handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
