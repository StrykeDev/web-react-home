import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { TodoListContext } from "../../../contexts/TodoListContext";

import TodoWidgetTodo from "./TodoWidgetTodo";
import { Card } from "react-bootstrap";

const TodoWidget = props => {
  const { todos } = useContext(TodoListContext);

  const recent = todos
    .filter(todo => !todo.completed)
    .slice(0, props.amount ? props.amount : 5);

  const list = (
    <Card.Body className="d-flex flex-column">
      <Card.Title>
        <small>Your oldest active todos</small>
      </Card.Title>

      <ul className="list-unstyled flex-fill">
        {recent.map(todo => (
          <TodoWidgetTodo key={todo.id} todo={todo} />
        ))}
      </ul>

      <Link to="/todo-list" className="align-self-end">
        View full list
      </Link>
    </Card.Body>
  );

  const noList = (
    <Card.Body className="text-center">
      You don't have any todo.
      <Link to="/todo-list" className="d-block">
        Add a todo
      </Link>
    </Card.Body>
  );

  return (
    <Card className="h-100 w-100">{recent.length > 0 ? list : noList}</Card>
  );
};

export default TodoWidget;
