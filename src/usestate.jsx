import React, { useState } from "react";
import React from 'react';
function Usestate() {
  const [dark, setDark] = useState(false);
  const [plus, setPlus] = useState(0);

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addtodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  // Delete Todo
  const deletetodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "darkgray",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: dark ? "white" : "black",
        gap: "20px",
      }}
    >
      {/* Counter */}
      <h1>COUNTER</h1>

      <div>
        <button onClick={() => setPlus(plus + 1)}>+</button>

        <p>{plus}</p>

        <button onClick={() => setPlus(plus - 1)}>-</button>
      </div>

      {/* Dark Mode */}
      <button onClick={() => setDark(!dark)}>
        Toggle
      </button>

      {/* Todo List */}
      <div>
        <h1>TODO LIST</h1>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Todo"
        />

        <button onClick={addtodo}>ADD</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}

              <button onClick={() => deletetodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Usestate;