import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      className="navbar navbar-expand-lg navbar-light header sticky-top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand>
          <NavLink
            exact
            to="/"
            //smooth={true}
            activeClass="active"
            spy={true}
            className="nav-item nav-link text-dark brand"
          >
            <h4>Ankit Jaishwal</h4>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              exact
              to="/"
              //smooth={true}
              activeClassName="active"
              className="nav-item nav-link"
            >
              HOME <span className="sr-only"></span>
            </NavLink>

            <NavLink
              to="/profile"
              //smooth={true}
              activeClassName="active"
              className="nav-item nav-link"
            >
              PROFILE
            </NavLink>

            <NavLink
              to="/projects"
              activeClassName="active"
              className="nav-item nav-link"
            >
              PROJECTS
            </NavLink>

            <NavLink
              to="/certifications"
              activeClassName="active"
              className="nav-item nav-link"
            >
              CERTIFICATIONS
            </NavLink>

            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-item nav-link"
            >
              CONTACT <span className="sr-only"></span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // {<nav >
    //   <a className="navbar-brand mx-5 text-light" href="/">
    //
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-bs-toggle="collapse"
    //     data-bs-target="#toggleCollapse"
    //     aria-controls="toggleCollapse"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="toggleCollapse">
    //     <div className="navbar-nav ms-auto mx-5">
    //       <NavLink
    //         exact
    //         to="/"
    //         activeClassName="active"
    //         className="nav-item nav-link"
    //       >
    //         HOME <span className="sr-only"></span>
    //       </NavLink>
    //       <NavLink
    //         to="/profile"
    //         activeClassName="active"
    //         className="nav-item nav-link"
    //       >
    //         PROFILE
    //       </NavLink>
    //       <NavLink
    //         to="/projects"
    //         activeClassName="active"
    //         className="nav-item nav-link"
    //       >
    //         PROJECTS
    //       </NavLink>
    //       <NavLink
    //         to="/certifications"
    //         activeClassName="active"
    //         className="nav-item nav-link"
    //       >
    //         CERTIFICATIONS
    //       </NavLink>
    //       <NavLink
    //         to="/contact"
    //         activeClassName="active"
    //         className="nav-item nav-link"
    //       >
    //         CONTACT
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav>}
  );
}

export default Header;
