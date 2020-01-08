import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import { TodoListContext } from "../../../contexts/TodoListContext";

import "./TodoList.css";

const TodoItem = props => {
  const { dispatch } = useContext(TodoListContext);

  const btnRemove = props.todo.completed ? (
    <Button
      variant="outline-danger"
      className="btn-remove-todo ml-auto"
      onClick={() => dispatch({ type: "REMOVE_TODO", id: props.todo.id })}
    />
  ) : (
    <Button
      disabled
      variant="outline-secondary"
      className="btn-remove-todo ml-auto"
    />
  );
  return (
    <li className="d-flex">
      <span
        className={props.todo.completed ? "completed" : ""}
        onClick={() =>
          dispatch({ type: "TOGGLE_COMPLETED", id: props.todo.id })
        }
      >
        {props.todo.title}
      </span>
      {btnRemove}
    </li>
  );
};

export default TodoItem;
