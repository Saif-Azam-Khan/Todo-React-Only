import { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import todos from "./data/todos";

function App() {
  const [newtodo, setNewtodo]=useState(todos)

  return (
    <div className="App">
      <TodoForm setNewtodo={setNewtodo} />
      <TodoList todos={newtodo} setNewtodos={setNewtodo} />
    </div>
  );
}

export default App;
