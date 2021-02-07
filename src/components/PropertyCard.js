import React from "react";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faEnvelope,
  faMapMarkerAlt,
  faPoundSign,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div className="prop-card-title">
        <h4>{title}</h4>
      </div>
      <div className="prop-card-type-and-city">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {type}, {city}
      </div>
      <div className="prop-card-bedrooms">
        <FontAwesomeIcon icon={faBed} />
        {bedrooms}
      </div>
      <div className="prop-card-bathrooms">
        <FontAwesomeIcon icon={faBath} />
        {bathrooms}
      </div>
      <div className="prop-card-price">
        <FontAwesomeIcon icon={faPoundSign} />
        {parseInt(price).toLocaleString()}
      </div>
      <a href={"mailto:" + email}>
        <div className="prop-card-email">
          <FontAwesomeIcon icon={faEnvelope} />
          Enquire
        </div>
      </a>
    </div>
  );
};

export default PropertyCard;
