import React, { useState, useContext, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = props => {
  const { auth, dispatch } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setLoginError(false);
    } else {
      setValidated(false);
      dispatch({ type: "LOGIN", username, password });
      setLoginError(true);
    }
  };

  useEffect(() => {
    if (auth.current) {
      props.history.push("/");
    }
  });

  return (
    <Container className="d-flex justify-content-center">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="my-5 mx-md-5 w-100"
        style={{ maxWidth: "450px" }}
      >
        <Form.Group controlId="formUsername" className="m-1 mb-2">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword" className="m-1 mb-2">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>

        {loginError ? (
          <Form.Text className="text-center text-danger">
            Wrong username or password.
          </Form.Text>
        ) : (
          ""
        )}

        <Form.Group controlId="formButton" className="mx-1 my-4">
          <Button variant="primary" block type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignIn;
