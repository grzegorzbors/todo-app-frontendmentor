import React from "react";

const Input = () => {
  return (
    <form>
      <input
        type="text"
        id="new-todo-input"
        className="create__todo"
        name="text"
        autoComplete="off"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default Input;

// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
