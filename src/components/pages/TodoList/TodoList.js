import React, { useContext, useState } from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

import Popup from "../../../helpers/Popup";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import { TodoListContext } from "../../../contexts/TodoListContext";

import "./TodoList.css";

const TodoList = props => {
  const { todos, dispatch } = useContext(TodoListContext);
  const [listFilter, setListFilter] = useState();

  let todoList = [];
  switch (listFilter) {
    case "active":
      todoList = todos.filter(todo => !todo.completed);
      break;

    case "completed":
      todoList = todos.filter(todo => todo.completed);
      break;

    default:
      todoList = todos;
      break;
  }

  const handleRemoveCompleted = () => {
    const buttons = [
      {
        text: "Remove",
        variant: "danger",
        onClick: () => dispatch({ type: "REMOVE_COMPLETED" })
      },
      {
        text: "Cancel",
        variant: "secondary",
        onClick: () => {}
      }
    ];

    const popup = new Popup();
    popup.showModal(
      "Remove Completed?",
      "Are you sure that you want to remove all the completed todos?",
      buttons
    );
  };

  const handleCompletedList = () => {
    const buttons = [
      {
        text: "All Done",
        variant: "primary",
        onClick: () => dispatch({ type: "COMPLETE_ALL" })
      },
      {
        text: "Cancel",
        variant: "secondary",
        onClick: () => {}
      }
    ];

    const popup = new Popup();
    popup.showModal(
      "Completed The List?",
      "Are you sure that you completed all the todos?",
      buttons
    );
  };

  return (
    <>
      <Jumbotron fluid className="pt-5 pb-3">
        <Container>
          <AddTodo />

          <div className="d-flex justify-content-start">
            <Button
              size="sm"
              variant="secondary"
              className="mr-2"
              onClick={() => setListFilter("all")}
            >
              All ({todos.length})
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="mr-2"
              onClick={() => setListFilter("active")}
            >
              Active ({todos.filter(task => !task.completed).length})
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="mr-2"
              onClick={() => setListFilter("completed")}
            >
              Completed ({todos.filter(task => task.completed).length})
            </Button>

            <Button
              size="sm"
              variant="secondary"
              className="ml-auto"
              onClick={handleRemoveCompleted}
            >
              Remove Completed
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="ml-2"
              onClick={handleCompletedList}
            >
              Completed List
            </Button>
          </div>
        </Container>
      </Jumbotron>

      <Container>
        <ul className="todolist">
          {todoList.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default TodoList;
