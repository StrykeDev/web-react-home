import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { TodoListContext } from "../../../contexts/TodoListContext";

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
          <li key={todo.id} className="border-bottom border-light my-2">
            <span
              style={
                todo.completed
                  ? { textDecoration: "line-through", opacity: 0.5 }
                  : null
              }
            >
              {todo.title}
            </span>
          </li>
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
