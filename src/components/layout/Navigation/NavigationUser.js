import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationUser = props => {
  return props.user ? (
    <>
      <NavDropdown
        title={<span className="text-white mx-2">{props.user}</span>}
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
        <Navbar.Text className="text-white">{props.user}</Navbar.Text>
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
};

export default NavigationUser;
