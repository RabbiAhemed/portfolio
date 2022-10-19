import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="menu">
          <div>
            <NavLink to="/home">
              <img
                src="https://i.ibb.co/wdqJgzK/cover-removebg-preview.png"
                alt="cover-removebg-preview"
                border="0"
              />
            </NavLink>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Me</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact Me</NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
