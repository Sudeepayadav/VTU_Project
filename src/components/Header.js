import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-style" expand="lg">
        <container>
          <Navbar.Brand href="#">
            <Image
              src="images/logo.jpeg"
              className="logo-img-style"
              alt="Vtu logo"
            />
            <h6 className="logo-text-style">
              Visvesvaraya Technological University, Belagavi
            </h6>
          </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" id="basic-nav-dropdown">
                Home
              </Nav.Link>
              <Nav.Link href="#" id="basic-nav-dropdown">
                AboutUs
              </Nav.Link>
              <NavDropdown title="Academic" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Circular & notification
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Examination" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  Examination Guidlines
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Examination Applivation
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Result</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  computer Science Engg
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Electronics & Communication Engg
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Admin Login</NavDropdown.Item>
                <NavDropdown.Item href="#">Staff Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </container>
      </Navbar>
    </header>
  );
};
export default Header;
