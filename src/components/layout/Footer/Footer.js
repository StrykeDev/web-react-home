import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import iconIsrael from "./assats/icon_israel.svg";

const Footer = props => {
  const year = new Date().getFullYear();

  return (
    <Jumbotron as="footer" fluid className="m-0 py-3 mt-5 bg-light">
      <Container className="d-flex justify-content-between align-items-center px-4">
        <p className="text-muted">
          <small>Copyright © {year} | attias.barak@gmail.com</small>
        </p>
        <p className="text-muted">
          <img src={iconIsrael} alt="" height="16" className="m-2" />
          <small>Made In Israel</small>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Footer;
