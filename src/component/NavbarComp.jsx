import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavbarComp.css";

const NavbarComp = () => {
  return (
    <div>
      <Navbar sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="title fs-1">
            Ambalanmaco
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="me-3 navlinkk">
                Dewan
              </Nav.Link>
              <Nav.Link href="#link" className="me-3 navlinkk">
                Materi
              </Nav.Link>
              <Nav.Link href="#home" className="navlinkk">
                Dokumentasi
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarComp;
