import React from "react";
import "./App.css";

//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import DeleteButton from "./components/DeleteButton"

function App() {
  return <div className="App">
  <TodoList/>
  <TodoForm/>
  <DeleteButton/>
  </div>;
}

export default App;
