import React, { createContext, useState } from "react";
import Home from "../components/pages/Home/Home";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import SignOut from "../components/auth/SignOut";
import TodoList from "../components/pages/TodoList";

export const PagesContext = createContext();

const PagesContextProvider = props => {
  const [pages] = useState([
    {
      page: "Home",
      url: "/",
      content: Home,
      nav: false
    },
    {
      page: "Sign In",
      url: "/sign-in",
      content: SignIn,
      nav: false
    },
    {
      page: "Sign Up",
      url: "/sign-up",
      content: SignUp,
      nav: false
    },
    {
      page: "Sign Out",
      url: "/sign-out",
      content: SignOut,
      nav: false
    },
    {
      page: "Todo List",
      url: "/todo-list",
      content: TodoList,
      nav: true
    }
  ]);

  return (
    <PagesContext.Provider value={{ pages }}>
      {props.children}
    </PagesContext.Provider>
  );
};

export default PagesContextProvider;
