import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "react-bootstrap";

const SignOut = () => {
  const { dispatch } = useContext(AuthContext);

  const signOut = () => {
    dispatch({ type: "LOGOUT" });
    window.location.href = "/";
  };

  return (
    <div className="py-5 text-center">
      <h1 className="display-3">WARNING</h1>
      <p className="lead">
        Signing out will delete all local data which will reset the application.
      </p>
      <Button variant="outline-danger" onClick={signOut}>
        Delete Local Data And Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
