// src/components/NavBar.jsx
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // 👈 Create this CSS file

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Navbar expand="lg" sticky="top" className="gradient-navbar">
      <Container>
        <Navbar.Brand href="/" className="text-white fw-bold">Mutta Bhoomika</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick("about")} className="text-white">About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("skills")} className="text-white">Skills</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("projects")} className="text-white">Projects</Nav.Link>
            <Nav.Link href="/certificates" className="text-white">Certificates</Nav.Link>
            <Nav.Link href="/resume" className="text-white">Resume</Nav.Link>
            <Nav.Link onClick={() => handleNavClick("contact")} className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
