import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/SideBar.css";
import getFilteredProperties from "../requests/getFilteredProperties";
import Alert from './Alert';

const Sidebar = ({ setProperties, errorMessage, setErrorMessage }) => {
  const { search } = useLocation();
  useEffect(() => {
    async function loadProperties() {
      try {
        const res = await getFilteredProperties(search);
        if (res.status === 200) {
          const data = res.data;
          setErrorMessage("");
          setProperties(data);
        } else {
          setProperties([]);
          setErrorMessage(
            "Oops! Something went wrong. Cannot get properties."
          );
        }
      } catch (err) {
        setProperties([]);
        setErrorMessage("Oops! Something went wrong. Cannot get properties.");
      }
    }
    loadProperties();
  }, [search, setErrorMessage, setProperties]);

  if (errorMessage) return <Alert message={errorMessage} success={false} />;

  return (
    <div className="side-bar">
      <Link to={`/?query={"city": "Manchester"}`} className="side-bar-link">
        Manchester
      </Link>
      <Link to={`/?query={"city": "Leeds"}`} className="side-bar-link">
        Leeds
      </Link>
      <Link to={`/?query={"city": "Sheffield"}`} className="side-bar-link">
        Sheffield
      </Link>
      <Link to={`/?query={"city": "Liverpool"}`} className="side-bar-link">
        Liverpool
      </Link>
    </div>
  );
};

export default Sidebar;