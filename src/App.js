import React, { useState } from "react";
import "./style.css";
import Todo from "./Todo";

export default function App() {
  const [todo, setTodos] = useState([
    "this ",
    "take a mango",
    "go to the school"
  ]);
  const [input, setInput] = useState("");

  const addTodo = event => {
    event.preventDefault(); //stop refeshing page
    setTodos([...todo, input]); //add todo tat last
    setInput(""); //blank input field
  };

  return (
    <div className="App">
      <h1>Just another Todo App</h1>
      <form>
        <input
          value={input}
          onChange={event => setInput(event.target.value)}
          className="input"
        />

        <button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          className="btn"
        >
          Add todo{" "}
        </button>
      </form>
      <ul>
        {todo.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}
