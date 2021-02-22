import React, { useState } from "react";
import {addFavourite} from '../requests/index';
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faEnvelope,
  faMapMarkerAlt,
  faPoundSign,
  faHeart,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
  propertyId,
  userId,
}) => {

const [ saved, setSaved ] = useState(false);

const handleSaveFavourite = async (event) => {
  event.preventDefault();
  try {
      const res = await addFavourite(propertyId, userId);
      if (res.status === 201) {
        setSaved(true);
      } else {
        alert("Sorry, property couldn't be saved");
      }
    } catch (err) {
        alert("Sorry, property couldn't be saved");
    }
}

  return (
    <div className="property-card" data-testid="property-card">
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
      {userId && (
        <button
          type="button"
          className="prop-card-favourite-button"
          onClick={handleSaveFavourite}
          disabled={saved}
        >
          {
            !saved ? <><FontAwesomeIcon icon={faHeart} />Save</> 
              : <><FontAwesomeIcon icon={faCheck} /> Saved</>
          }
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
