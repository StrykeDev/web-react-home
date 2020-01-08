import React, { useContext, useState } from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

import MessageBox from "../../MessageBox";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import { TodoListContext } from "../../../contexts/TodoListContext";

import "./TodoList.css";

const TodoList = props => {
  const { todos, dispatch } = useContext(TodoListContext);
  const [listFilter, setListFilter] = useState();
  const [messageBox, setMessageBox] = useState();

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

  // Handle remove completed
  const handleRemoveCompletedAlert = () => {
    const buttons = [
      {
        text: "Remove",
        variant: "danger",
        action: () => handleRemoveCompleted()
      },
      {
        text: "Cancel",
        variant: "secondary",
        action: () => setMessageBox()
      }
    ];
    setMessageBox(
      <MessageBox
        title="Remove Completed?"
        body="Are you sure that you want to remove all the completed todos?"
        buttons={buttons}
      />
    );
  };

  const handleRemoveCompleted = () => {
    dispatch({ type: "REMOVE_COMPLETED" });
    setMessageBox();
  };

  // Handle complete list
  const handleCompletedListAlert = () => {
    const buttons = [
      {
        text: "All Done",
        variant: "primary",
        action: () => handleCompletedList()
      },
      {
        text: "Cancel",
        variant: "secondary",
        action: () => setMessageBox()
      }
    ];
    setMessageBox(
      <MessageBox
        title="Completed The List?"
        body="Are you sure that you completed all the todos?"
        buttons={buttons}
      />
    );
  };

  const handleCompletedList = () => {
    dispatch({ type: "COMPLETE_ALL" });
    setMessageBox();
  };

  return (
    <div>
      {messageBox}
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
              onClick={handleRemoveCompletedAlert}
            >
              Remove Completed
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="ml-2"
              onClick={handleCompletedListAlert}
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
    </div>
  );
};

export default TodoList;
