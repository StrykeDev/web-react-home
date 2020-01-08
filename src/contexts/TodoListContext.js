import React, { createContext, useEffect, useReducer } from "react";
import uuid from "uuid";

export const TodoListContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: uuid(), title: action.title, completed: false }];

    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

    case "COMPLETE_ALL":
      return state.map(todo => {
        todo.completed = true;
        return todo;
      });

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "REMOVE_COMPLETED":
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};

const TodoListContextProvider = props => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const local = localStorage.getItem("todos");
    return local
      ? JSON.parse(local)
      : [
          {
            id: uuid(),
            title: "Open the todo list",
            completed: false
          },
          {
            id: uuid(),
            title: "Add new todo",
            completed: false
          },
          {
            id: uuid(),
            title: "Complete the todo",
            completed: false
          },
          {
            id: uuid(),
            title: "???",
            completed: false
          },
          {
            id: uuid(),
            title: "Profit",
            completed: false
          }
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoListContext.Provider
      value={{
        todos,
        dispatch
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
