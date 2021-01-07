import "./App.css";
import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h3>Johnny's Todo List</h3>
      </header>
      <Form setImputText={setImputText} />
      <TodoList />
    </div>
  );
}

export default App;

// git branch -m master main [ -m is move and you just moved master to main]
