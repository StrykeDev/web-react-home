import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Footer = props => {
  return (
    <Jumbotron as="footer" fluid className="m-0 p-0 bg-light fixed-bottom">
      <Container className="d-flex justify-content-between py-2">
        <p className="text-muted mx-2">
          <small>Copyright © 2020 | attias.barak@gmail.com</small>
        </p>
        <p className="text-muted mx-2">
          <small>Useless Websites Group</small>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Footer;
