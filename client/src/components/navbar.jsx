import React from "react";
import "./navbar.css"; // Assuming you want to style it using an external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="name">Kavya Sharma</h1>
      <ul className="navbar-list">
        <li>
          <a href="#profile">Profile</a>
        </li>
        <li>
          <a href="#introduction">Introduction</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
