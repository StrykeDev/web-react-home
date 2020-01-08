import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import { PagesContext } from "../../contexts/PagesContext";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = props => {
  const { pages } = useContext(PagesContext);
  const { auth } = useContext(AuthContext);

  const user = auth.current ? (
    <>
      <Navbar.Text>
        Signed in as: <strong>{auth.current}</strong>
      </Navbar.Text>
      <Nav.Link as={Link} to="/sign-out">
        Sign Out
      </Nav.Link>
    </>
  ) : (
    <>
      <Nav.Link as={Link} to="/sign-in">
        Sign In
      </Nav.Link>
      <Nav.Link as={Link} to="/sign-up">
        Sign Up
      </Nav.Link>
    </>
  );

  const links = pages.map(page => {
    if (page.nav) {
      return (
        <Nav.Link as={NavLink} to={page.url} key={page.page}>
          {page.page}
        </Nav.Link>
      );
    }
    return "";
  });

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ¯\_(ツ)_/¯
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">{links}</Nav>
          <Nav className="ml-auto">{user}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
