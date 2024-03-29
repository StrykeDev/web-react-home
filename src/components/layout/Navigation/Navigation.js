import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import NavigationUser from "./NavigationUser";

import iconLogo from "./assats/icon_logo.svg";
import iconMenu from "./assats/icon_menu.svg";

const Navigation = props => {
  const links = props.links.map(link => {
    if (link.nav) {
      return (
        <Nav.Link
          key={link.page}
          eventKey={link.page}
          as={NavLink}
          to={link.url}
        >
          {link.page}
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
            <img src={iconLogo} alt="" height="40" />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle className="border-0">
          <img src={iconMenu} alt="" height="30" />
        </Navbar.Toggle>

        <Navbar.Collapse>
          <Nav className="mr-auto">{links}</Nav>
          <NavDropdown.Divider />
          <Nav className="ml-auto">
            <NavigationUser user={props.user} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
