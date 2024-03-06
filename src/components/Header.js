import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-style" expand="lg">
        <Container>
          <LinkContainer to = '/'>
            <Navbar.Brand href="/">
              <Image
                src="images/logo.jpeg"
                className="logo-img-style"
                alt="Vtu logo"
              />
              <h6 className="logo-text-style">
                Visvesvaraya Technological University, Belagavi
              </h6>
            </Navbar.Brand>
          </LinkContainer>

         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to ='/'>
              <Nav.Link href="/" id="basic-nav-dropdown">
                Home
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to = '/about'>
                <Nav.Link href="/about" id="basic-nav-dropdown">
                  AboutUs
                </Nav.Link>
              </LinkContainer>

              <NavDropdown title="Academic" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Circulars & Notification
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
                <LinkContainer to="/result/loginpage"><NavDropdown.Item href="#">Result</NavDropdown.Item>
                </LinkContainer>
                
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
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
