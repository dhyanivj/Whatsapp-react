import React, { useState} from "react";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState(['take a mango','go to the school']);
  
  return (
    <div className="App">
    <h1>cleaver progammer</h1>
    <input/>
    <button>Add todo </button>
<ul>
<li>
</li>
</ul>

    </div>
  );
}
