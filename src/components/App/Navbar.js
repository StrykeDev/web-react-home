import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import { PagesContext } from "../../contexts/PagesContext";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar = props => {
  const { pages } = useContext(PagesContext);
  const { auth } = useContext(AuthContext);

  const user = auth.current ? (
    <NavDropdown title={auth.current}>
      <NavDropdown.Item eventKey="profile" as={Link} to="/profile">
        Profile
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="sign-out" as={Link} to="/sign-out">
        Sign Out
      </NavDropdown.Item>
    </NavDropdown>
  ) : (
    <NavDropdown title="Hello Stranger">
      <NavDropdown.Item eventKey="sign-in" as={Link} to="/sign-in">
        Sign in
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="sign-up" as={Link} to="/sign-up">
        Sign up
      </NavDropdown.Item>
    </NavDropdown>
  );

  const links = pages.map(page => {
    if (page.nav) {
      return (
        <Nav.Link key={page.page} eventKey={page.page} as={Link} to={page.url}>
          {page.page}
        </Nav.Link>
      );
    }
    return null;
  });

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
      collapseOnSelect={true}
    >
      <Container>
        <Nav.Link eventKey="logo" as={Link} to="/">
          <Navbar.Brand>¯\_(ツ)_/¯</Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">{links}</Nav>
          <Nav className="ml-auto">{user}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
