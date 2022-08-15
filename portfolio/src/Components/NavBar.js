import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Jordan's Portfolio</Navbar.Brand>
          <Nav>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/Portfolio">
              Portfolio Pieces
            </Link>
            <Link className="nav-link" to="/Resume">
              Resume
            </Link>
            <Link className="nav-link" to="/About">
              About
            </Link>
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
