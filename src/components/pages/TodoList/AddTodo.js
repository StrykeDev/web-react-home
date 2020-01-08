import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { TodoListContext } from "../../../contexts/TodoListContext";

import "./TodoList.css";

const AddTodo = props => {
  const { dispatch } = useContext(TodoListContext);
  const [newTodo, setNewTodo] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setValidated(false);
      dispatch({ type: "ADD_TODO", title: newTodo });
      setNewTodo("");
    } else {
      e.stopPropagation();
      setValidated(true);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group
        controlId="formNewTodo"
        className="d-flex flex-column flex-md-row"
      >
        <Form.Control
          name="newTodo"
          type="text"
          className="mr-md-2 mb-md-0 mb-2"
          placeholder="What do you need to do?"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          maxLength="256"
          required
        />
        <Button type="submit">Add</Button>
      </Form.Group>
    </Form>
  );
};

export default AddTodo;
