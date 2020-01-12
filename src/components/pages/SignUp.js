import React, { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";

import { AuthContext } from "../../contexts/AuthContext";

import { capitalize } from "../../helpers/StringFunc";

const SignUp = props => {
  const { auth, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [validated, setValidated] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setRegisterError(false);
      setValidated(false);
      const user = {
        username,
        firstname: capitalize(firstname),
        lastname: capitalize(lastname),
        password
      };

      dispatch({ type: "ADD_USER", user });

      if (auth.current) {
        props.history.push("/");
      } else {
        setRegisterError(true);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="my-5 mx-md-5 w-100"
        style={{ maxWidth: "450px" }}
      >
        <div
          className="d-md-flex justifiy-content-between"
          style={{ marginBottom: "-3pt" }}
        >
          <Form.Group controlId="formFirstName" className="m-1 mb-2 flex-fill">
            <Form.Label>First Name: </Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formLastName" className="m-1 mb-2 flex-fill">
            <Form.Label>Last Name: </Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name.
            </Form.Control.Feedback>
          </Form.Group>
        </div>

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

        {registerError ? (
          <Form.Text className="text-center text-danger">
            Username already taken.
          </Form.Text>
        ) : (
          ""
        )}

        <Form.Group controlId="formButton" className="mx-1 my-4">
          <Button variant="primary" block type="submit">
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignUp;
