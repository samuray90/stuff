import React from "react";

const Form = ({ setImputText }) => {
  const InputTextHandler = (e) => {
    console.log(e.target.value);
    setImputText(e.target.value);
  };
  const submitTodoHandler = () => {
    console.log(e);
  };
  return (
    <div>
      <form>
        <input onChange={InputTextHandler} type="text" className="todo-imput" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filder-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
