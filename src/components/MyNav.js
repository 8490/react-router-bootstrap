import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        onSelect={(eventKey) =>
          eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
        }
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link eventKey="home">
              <img src={logo} alt="" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="developing">
                  Full-Stack-Developing
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="data-science">
                  Data-Science
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="devops">
                  AWS-DEVOPS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="about">About</Nav.Link>
              <Nav.Link eventKey="instructors">Instructors</Nav.Link>
              <Nav.Link eventKey="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;

{
  /* <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Full-Stack-Developing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Data-Science
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  AWS-DEVOPS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Instructor</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> */
}
