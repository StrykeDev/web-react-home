import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import { PagesContext } from "../../contexts/PagesContext";
import { AuthContext } from "../../contexts/AuthContext";

import logo from "./assats/icon_logo.svg";

const NavBar = props => {
  const { pages } = useContext(PagesContext);
  const { auth } = useContext(AuthContext);

  const user = auth.current ? (
    <>
      <NavDropdown
        title={<span className="text-white mx-2">{auth.current}</span>}
        className="d-none d-md-block"
      >
        <NavDropdown.Item eventKey="profile" as={NavLink} to="/profile">
          Profile
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="sign-out" as={NavLink} to="/sign-out">
          Sign Out
        </NavDropdown.Item>
      </NavDropdown>

      <span className="d-md-none">
        <Navbar.Text className="text-white">{auth.current}</Navbar.Text>
        <Nav.Link eventKey="profile" as={NavLink} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link eventKey="sign-out" as={NavLink} to="/sign-out">
          Sign Out
        </Nav.Link>
      </span>
    </>
  ) : (
    <>
      <Nav.Link eventKey="sign-in" as={NavLink} to="/sign-in">
        Sign in
      </Nav.Link>
      <Nav.Link eventKey="sign-up" as={NavLink} to="/sign-up">
        Sign up
      </Nav.Link>
    </>
  );

  const links = pages.map(page => {
    if (page.nav) {
      return (
        <Nav.Link
          key={page.page}
          eventKey={page.page}
          as={NavLink}
          to={page.url}
        >
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
      className="py-1"
    >
      <Container>
        <Nav.Link eventKey="logo" as={NavLink} to="/" className="p-0 m-0">
          <Navbar.Brand>
            <img src={logo} alt="" height="40" />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">{links}</Nav>
          <NavDropdown.Divider />
          <Nav className="ml-auto">{user}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
