import React from "react";
import "../styles/Properties.css";
import PropertyCard from "./PropertyCard";

const Properties = () => {
const property = {
  title: "Light and spacious city centre apartment",
  type: "Flat",
  bedrooms: "2",
  bathrooms: "1",
  price: "170000",
  city: "Manchester",
  email: "info@manchesterflats.com",
};

  return <div className="properties">
    <h2>Properties</h2>
    <PropertyCard
      title={property.title}
      type={property.type}
      bedrooms={property.bedrooms}
      bathrooms={property.bathrooms}
      price={property.price}
      city={property.city}
      email={property.email}
    />
  </div>;
};

export default Properties;
