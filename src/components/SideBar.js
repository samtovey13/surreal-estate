import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faFilter,
  faPoundSign,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ loadProperties }) => {

  const { search } = useLocation();
  const history = useHistory();
  const [searchText, setSearchText] = useState("");
  
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const queryString = buildQueryString("query", {
      title: { $regex: searchText, $options: 'i' },
    });
    history.push(queryString);
  }

  useEffect(() => {
    loadProperties(search);
  }, [ search, loadProperties ])

  return (
    <div className="side-bar">

      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

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