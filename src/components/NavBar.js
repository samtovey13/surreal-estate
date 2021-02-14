import React from "react";
import '../styles/NavBar.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <div className="navbar">
      <div className="header-flex-container">
        <div className="header">
          <img className="logo" src={logo} alt="logo" width="80" height="100" />
          <h1 className="header-name">Surreal Estate</h1>
        </div>
        <div className="login-container">
          {userId && (
            (
            (
            <button className="logout-button" onClick={onLogout}>
              
              
              Sign Out
            
            
            </button>
          )
          )
          )}
          {!userId && (
            <FacebookLogin
              appId="298673424934631"
              autoLoad={true}
              fields="name,email,picture"
              callback={onLogin}
            />
          )}
        </div>
      </div>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
