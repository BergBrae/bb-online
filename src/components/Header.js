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
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/life-so-far" onClick={handleSelect}>
            <Nav.Link>Life So Far</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/words-of-encouragement" onClick={handleSelect}>
            <Nav.Link>Words of Encouragement</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
