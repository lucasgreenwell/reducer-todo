import React, { useState } from "react";

function TodoForm(props) {
  const [name, setName] = useState("");
  
  const handleChange = e => {
    setName(e.target.value)
  };

  return (
    <form onChange={handleChange} onSubmit={e => {props.handleSubmit(e, name)}}>
      <label for="newtodo">
        <input type="text" id="newtodo" placeholder="im a form" />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
