import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  const green = { text: "#007a33", border: "#d3edd9" };
  const red = { text: "#de0000", border: "#ffc2c2" };
  const color = success ? green : red;

  if (!message) return null;
  
  return (
    <div className="alert-container">
      <div
        className="alert"
        data-testid="alert"
        style={{
          color: color.text,
          borderColor: color.border,
        }}
      >
        {message}
      </div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

export default Alert;
