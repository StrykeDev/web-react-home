import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const PageNotFound = props => {
  let history = useHistory();

  const message = [
    "Even AI couldn't find that page :O",
    "Page not found.",
    "Sorry, we can't find the page you were looking for.",
    "Something is broken.",
    "This link isn't working, try one of this 2 instead :",
    "The page cannot be found.",
    "404 - Page not found",
    "ERROR 404!"
  ];

  return (
    <Container className="text-center my-5">
      <h1 className="display-3">Oh No!</h1>
      <p className="lead">
        {message[Math.floor(Math.random() * message.length)]}
      </p>
      <div className="d-flex flex-md-row flex-column justify-content-around w-50 mx-auto">
        <Button
          className="flex-fill m-2"
          variant="outline-primary"
          onClick={() => history.push("/")}
        >
          Go Home
        </Button>
        <Button
          className="flex-fill m-2"
          variant="outline-secondary"
          onClick={() => history.goBack()}
        >
          Go Back
        </Button>
      </div>
    </Container>
  );
};

export default PageNotFound;
