import React from "react";
import '../styles/NavBar.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import FacebookLoginButton from './FacebookLoginButton';

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <div className="navbar">
      <div className="header-flex-container">
        <div className="header">
          <img className="logo" src={logo} alt="logo" width="40" height="50" />
          <h1 className="header-name">Surreal Estate</h1>
        </div>
        <FacebookLoginButton
          onLogin={onLogin}
          userId={userId}
          onLogout={onLogout}
        />
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        {userId && (
          <li className="navbar-links-item">
            <Link to="/favourites">My Favourites</Link>
          </li>
        )}
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
