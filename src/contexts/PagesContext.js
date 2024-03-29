import React, { createContext, useState } from "react";
import Home from "../components/pages/Home/Home";
import Profile from "../components/pages/Profile";
import TodoList from "../components/pages/TodoList";
import SignIn from "../components/pages/SignIn";
import SignUp from "../components/pages/SignUp";
import SignOut from "../components/pages/SignOut";

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
      page: "Profile",
      url: "/profile",
      content: Profile,
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
