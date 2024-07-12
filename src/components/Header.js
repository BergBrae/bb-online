import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <Navbar bg="light" expand="lg" expanded={expanded} onToggle={setExpanded}>
      <Navbar.Brand className='ms-3'>Brenda's 60th</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(exp => !exp)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" onSelect={handleSelect}>
          <LinkContainer to="/" onClick={handleSelect}>
            <Nav.Link className='ms-3'>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/life-so-far" onClick={handleSelect}>
            <Nav.Link className='ms-3'>Life So Far</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/birthday-wishes" onClick={handleSelect}>
            <Nav.Link className='ms-3'>Birthday Wishes</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
