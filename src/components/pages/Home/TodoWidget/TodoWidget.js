import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoListContext } from "../../../../contexts/TodoListContext";

import TodoWidgetTodo from "./TodoWidgetTodo";

const TodoWidget = props => {
  const { todos } = useContext(TodoListContext);

  const recent = todos.filter(todo => !todo.completed).slice(0, 5);

  const list = (
    <>
      <p>Your oldest active todos:</p>

      <ul className="list-unstyled w-100">
        {recent.map(todo => (
          <TodoWidgetTodo key={todo.id} todo={todo} />
        ))}
      </ul>

      <Link to="/todo-list" className="ml-auto mt-auto">
        View full list
      </Link>
    </>
  );

  const noList = (
    <p className="text-center">
      You don't have any todo.
      <Link to="/todo-list" className="d-block">
        Add a todo
      </Link>
    </p>
  );

  return (
    <div className="w-100 d-flex flex-column">
      {recent.length > 0 ? list : noList}
    </div>
  );
};

export default TodoWidget;
