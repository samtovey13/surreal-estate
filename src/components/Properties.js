import React, { useState, useEffect } from "react";
import "../styles/Properties.css";
import PropertyCard from "./PropertyCard";
import getProperties from "../requests/getProperties";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadProperties () {
      try {
        const res = await getProperties();
        if (res.status === 200) {
         const data = res.data;
         console.log(data);
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
    }
    loadProperties();
  }, [] )

  return <div className="properties">
    <h2>Properties</h2>
    {
      errorMessage && (<div className="properties-error-message">{errorMessage}</div>)
    }
    {
      properties && (properties.map((property) =>
        (<PropertyCard
          key={property._id}
          title={property.title}
          type={property.type}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          price={property.price}
          city={property.city}
          email={property.email}
        />)
      ))
    }
  
  </div>;
};

export default Properties;
