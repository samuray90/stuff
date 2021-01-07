import React, { useState } from "react";

function TodoList() {
  const [inputText, setImputText] = useState("");
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
    </div>
  );
}

export default TodoList;
