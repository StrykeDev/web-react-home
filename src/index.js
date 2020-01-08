import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";

import PagesContextProvider from "./contexts/PagesContext";
import AuthContextProvider from "./contexts/AuthContext";
import TodoListContextProvider from "./contexts/TodoListContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dark-theme-bootstrap.css";

ReactDOM.render(
  <AuthContextProvider>
    <PagesContextProvider>
      <TodoListContextProvider>
        <Router>
          <App />
        </Router>
      </TodoListContextProvider>
    </PagesContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(); // offline
