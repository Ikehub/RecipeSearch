/* eslint-disable react/no-array-index-key, react/jsx-filename-extension, no-console */

import "../App.css";
import React, { useState } from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import Logout from "../Logout";

function NavBar() {
  const [search, setSearch] = useState("");

  const searchMeal = (evt) => {
    if (evt.key === "Enter") {
      document.getElementById("search-form").submit();
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="justify-content-between"
    >
      <Navbar.Brand href="/home">Recipe Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/favorites">Favorites</Nav.Link>
          <Nav.Link href="">Meal Prep Calendar</Nav.Link>
          {/* <NavDropdown title={name} id="basic-nav-dropdown">
            <NavDropdown.Item href="/reviews">All Reviews</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown> */}
          <Logout />
        </Nav>
        <Form
          id="search-form"
          className="form-inline"
          method="get"
          action="/search"
        >
          <FormControl
            type="search"
            placeholder="Search for a meal"
            className="mr-sm-2"
            name="q"
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
