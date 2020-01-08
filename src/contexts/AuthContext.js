import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      state.current = state.users.find(
        user =>
          user.username.toLowerCase() === action.username.toLowerCase() &&
          user.password === action.password
      ).username;
      return state;

    case "LOGOUT":
      state.current = undefined;
      return state;

    case "ADD_USER":
      if (
        !state.users.find(
          user =>
            user.username.toLowerCase() === action.user.username.toLowerCase()
        )
      ) {
        state.current = action.user.username;
        state.users = [...state.users, action.user];
      }
      return state;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AuthContextProvider = props => {
  const [auth, dispatch] = useReducer(authReducer, {
    current: undefined,
    users: [
      {
        username: "Barak1250",
        firstname: "Barak",
        lastname: "Attias",
        password: "123"
      },
      {
        username: "Lilah420",
        firstname: "Lilah",
        lastname: "Kat",
        password: "123"
      },
      {
        username: "Bobsi205",
        firstname: "Eyal",
        lastname: "Shalom",
        password: "123"
      },
      {
        username: "HiPeRMaNo",
        firstname: "Oriel",
        lastname: "Mano",
        password: "123"
      }
    ]
  });

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
