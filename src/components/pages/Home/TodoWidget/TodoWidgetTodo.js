import React from "react";

const TodoWidgetTodo = props => {
  const todo = props.todo;

  const liStyle = {
    borderBottom: "dotted 1px var(--secondary)"
  };

  const completedStyle = {
    textDecoration: "line-through",
    opacity: 0.5
  };

  return (
    <li style={liStyle} className="my-2">
      <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
    </li>
  );
};

export default TodoWidgetTodo;
