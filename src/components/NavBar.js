import React from "react";
import '../styles/NavBar.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const NavBar = ({ onLogin, userId, onLogout }) => {
  return (
    <div className="navbar">
      <div className="header-flex-container">
        <div className="header">
          <img className="logo" src={logo} alt="logo" width="40" height="50" />
          <h1 className="header-name">Surreal Estate</h1>
        </div>
        {userId && (
          <button className="logout-button" onClick={onLogout}>
            <FontAwesomeIcon
              icon={faFacebook}
              className="facebook-logout-icon"
            />
            <p className="facebook-button-text">Sign Out</p>
          </button>
        )}
        {!userId && (
          <FacebookLogin
            appId="298673424934631"
            autoLoad={false}
            fields="name,email,picture"
            callback={onLogin}
            render={(renderProps) => (
              <button className="login-button" onClick={renderProps.onClick}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="facebook-login-icon"
                />
                <p className="facebook-button-text">Login</p>
              </button>
            )}
          />
        )}
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
