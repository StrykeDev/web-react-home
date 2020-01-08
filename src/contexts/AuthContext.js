import React, { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "LOGIN":
      const user = state.users.find(
        user =>
          user.username.toLowerCase() === action.username.toLowerCase() &&
          user.password === action.password
      );

      if (user) {
        newState.current = user.username;
        return newState;
      } else {
        return state;
      }

    case "LOGOUT":
      if (state.current) {
        localStorage.clear();
        newState.current = null;
        return newState;
      }
      return state;

    case "ADD_USER":
      if (
        !state.users.find(
          user =>
            user.username.toLowerCase() === action.user.username.toLowerCase()
        )
      ) {
        newState.current = action.user.username;
        newState.users = [...state.users, action.user];
        return newState;
      }
      return state;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const AuthContextProvider = props => {
  const [auth, dispatch] = useReducer(authReducer, {}, () => {
    const local = localStorage.getItem("auth");
    return local
      ? JSON.parse(local)
      : {
          current: null,
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
        };
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
