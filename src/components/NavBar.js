import React from "react";
import '../styles/NavBar.css';
import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img classname="logo" src={logo} alt="logo" width="80" height="100" />
      <h1 className="header-name">Surreal Estate</h1>
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
