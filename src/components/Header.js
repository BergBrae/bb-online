// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand className='ms-3'>Brenda's 60th</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/life-so-far">
          <Nav.Link>Life So Far</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/words-of-encouragement">
          <Nav.Link>Words of Encouragement</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
