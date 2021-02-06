import React from "react";
import "../styles/Alert.css";

const Alert = ({ message, success, submitted }) => {
  const green = { text: "#007a33", border: "#d3edd9" };
  const red = { text: "#de0000", border: "#ffc2c2" };
  const color = success ? green : red;
  return (
    submitted && <div
      className="alert"
      style={{
        color: color.text,
        borderColor: color.border,
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
