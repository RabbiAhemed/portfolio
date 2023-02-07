import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Menu.css";
import mySvg from "../../rabbi-black.svg";

const Menu = () => {
  return (
    <div id="top-menu">
      <Navbar bg="" expand="lg">
        <Container className="menu">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                // src="https://i.ibb.co/wdqJgzK/cover-removebg-preview.png"
                src={mySvg}
                width="100%"
                height="50"
                className="d-inline-block align-top rabbi py-2"
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto text-black"></Nav>
            <Nav>
              <a className="nav-link text-black fw-bold" href="home">
                <Link to="/">Home</Link>
              </a>
              <a className="nav-link text-black fw-bold" href="#about">
                About Me
              </a>
              <a className="nav-link text-black fw-bold" href="#skills">
                Skills
              </a>
              <a className="nav-link text-black fw-bold" href="#projects">
                Projects
              </a>
              <a
                className="nav-link text-black fw-bold"
                href="#contact-section"
              >
                Contact Me
              </a>
              <Link to="/blogs" className="mt-2" id="blog-link">
                Blogs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
