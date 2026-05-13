import { useState } from "react";

function Adddelete() {



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

    >


     

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

export default Adddelete