import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faFilter,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";
import getFilteredProperties from "../requests/getFilteredProperties";
import Alert from './Alert';



const Sidebar = ({ setProperties, errorMessage, setErrorMessage }) => {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

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
      <div className="side-bar-cities">
        <div className="side-bar-link">
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <Link
          to={buildQueryString("query", { city: "Manchester" })}
          className="side-bar-link"
        >
          Manchester
        </Link>
        <Link
          to={buildQueryString("query", { city: "Leeds" })}
          className="side-bar-link"
        >
          Leeds
        </Link>
        <Link
          to={buildQueryString("query", { city: "Sheffield" })}
          className="side-bar-link"
        >
          Sheffield
        </Link>
        <Link
          to={buildQueryString("query", { city: "Liverpool" })}
          className="side-bar-link"
        >
          Liverpool
        </Link>
      </div>
      <div className="side-bar-sorters">
        <Link
          to={buildQueryString("sort", { price: 1 })}
          className="side-bar-link"
        >
          <FontAwesomeIcon icon={faSortUp} />
        </Link>
        <div className="side-bar-link">
          <FontAwesomeIcon icon={faPoundSign} />
        </div>
        <Link
          to={buildQueryString("sort", { price: -1 })}
          className="side-bar-link"
        >
          <FontAwesomeIcon icon={faSortDown} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;