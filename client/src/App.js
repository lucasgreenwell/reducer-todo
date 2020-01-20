import React, {useState, useReducer} from "react";
import "./App.css";

//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import DeleteButton from "./components/DeleteButton";

import {reducer, initialState} from "./reducers/reducer"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e, name) => {
      e.preventDefault();
      dispatch({type:"ADD_NEW_ITEM" , payload: {name: name , id:Date.now(), completed: false}})
      console.log(state);
    }
    const handleComplete = () => {
      dispatch({type: "TOGGLE_COMPLETED"})
    }
 

  return (
    <div className="App">
      <TodoList list={state}/>
      <TodoForm handleSubmit={handleSubmit} />
      <DeleteButton />
    </div>
  );
}

export default App;
