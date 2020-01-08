import React from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

const PageNotFound = props => {
  let location = useLocation();
  let history = useHistory();

  return (
    <Container>
      <div className="my-5 mx-md-5 w-100">
        <h1 className="display-2">Oopsie!</h1>
        <h4>Couldn't found that page :\</h4>
        <p className="text-mute">
          <small>404 couldn't find '{location.pathname}'.</small>
        </p>
        <Button variant="outline-primary" onClick={() => history.goBack()}>Go Back</Button>
      </div>
    </Container>
  );
};

export default PageNotFound;
