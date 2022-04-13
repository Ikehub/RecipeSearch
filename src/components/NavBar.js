/* eslint-disable react/no-array-index-key, react-hooks/exhaustive-deps,
 react/jsx-filename-extension, no-console */

import '../App.css';
import React, { useState } from 'react';
import {
  Nav, Navbar, Form, FormControl,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const searchMeal = (evt) => {
    if (evt.key === 'Enter') {
      navigate(`/meal/${search}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="justify-content-between">
      <Navbar.Brand href="/home">Recipe Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title={username} id="basic-nav-dropdown">
            <NavDropdown.Item href="/reviews">All Reviews</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form className="form-inline" method="post" action="/">
          <FormControl
            type="search"
            placeholder="Search for a meal"
            className="mr-sm-2"
            name="meal_name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
