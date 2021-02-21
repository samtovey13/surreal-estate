import React, { useState, useCallback } from "react";
import "../styles/Properties.css";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import {getProperties} from "../requests/index";
import Sidebar from "./SideBar";

const Properties = ({userId}) => {
  const [properties, setProperties] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loadProperties = useCallback(async (query) => {
    try {
      const res = await getProperties(query);
      if (res.status === 200) {
        const data = res.data;
        setErrorMessage("");
        setProperties(data);
      } else {
        setProperties([]);
        setErrorMessage("Oops! Something went wrong. Cannot get properties.");
      }
    } catch (err) {
      setProperties([]);
      setErrorMessage("Oops! Something went wrong. Cannot get properties.");
    } 
  }, []);

  if (errorMessage) return(
    <Alert message={errorMessage} success={false} />
  )

  if (properties) return (
    <div className="properties">
      <Sidebar
        loadProperties={loadProperties}
      />
      <h2>Properties</h2>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} userId={userId} propertyId={property._id}/>
        ))}
      </div>
    </div>
  );
};

export default Properties;
