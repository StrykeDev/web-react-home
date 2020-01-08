import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const SignOut = props => {
  const { dispatch } = useContext(AuthContext);
  dispatch({ type: "LOGOUT" });
  window.location.href = "/";
  return <Redirect to="/" />;
};

export default SignOut;
