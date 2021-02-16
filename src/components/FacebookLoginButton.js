import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const FacebookLoginButton = ({ onLogin, userId, onLogout }) => {
  return (
    <>
      {userId ? (
        <button className="logout-button" onClick={onLogout}>
          <FontAwesomeIcon icon={faFacebook} className="facebook-logout-icon" />
          <p className="facebook-button-text">Sign Out</p>
        </button>
      ) : (
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
    </>
  );
};

export default FacebookLoginButton;
