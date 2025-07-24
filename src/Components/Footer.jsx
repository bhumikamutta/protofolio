import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-5"
      style={{
        background: "linear-gradient(to right, #007bff, #00c6ff)",
        color: "#fff",
      }}
    >
      <div className="container text-center">
        <h5 style={{ fontWeight: "bold", letterSpacing: "1px" }}>Connect with Me</h5>

        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://www.linkedin.com/in/bhoomika-mutta-5705952a0"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/bhumikamutta"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://instagram.com/your-instagram"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        <p className="mb-0" style={{ fontSize: "0.9rem" }}>
          &copy; {new Date().getFullYear()} <strong>Mutta Bhoomika</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
