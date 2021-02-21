import React, { useState, useCallback, useEffect } from "react";
import Alert from "./Alert";
import PropertyCard from "./PropertyCard";
import getFavourites from "../requests/getFavourites";
import deleteFavouriteById from '../requests/deleteFavouriteById'
import '../styles/Favourites.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Favourites = ({userId}) => {
  const [favourites, setFavourites] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupProperty, setPopupProperty] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const loadFavourites = useCallback(async (query) => {
    try {
      const res = await getFavourites(query);
      if (res.status === 200) {
        const data = res.data;
        setErrorMessage("");
        setFavourites(data);
      } else {
        setFavourites([]);
        setErrorMessage("Oops! Something went wrong. Cannot get properties.");
      }
    } catch (err) {
      setFavourites([]);
      setErrorMessage("Oops! Something went wrong. Cannot get properties.");
    }
  }, []);

  const handleRemoveFavourite = async (favourite) => {
    const query = JSON.stringify({ fbUserId: userId });
    try {
      const res = await deleteFavouriteById(favourite, query);
      if (res.status === 204) {
        setErrorMessage("");
        loadFavourites(query);
        window.alert("Successfully removed!");
      } else {
        setErrorMessage("Oops! Something went wrong. Cannot remove property.");
      }
    } catch (err) {
      setFavourites([]);
      setErrorMessage("Oops! Something went wrong. Cannot remove property.");
    }
  }

  const handleViewPopup = (property) => {
    setPopupProperty(property);
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setPopupProperty({});
    setShowPopup(false);
  }

  useEffect(() => {
    const query = JSON.stringify({fbUserId: userId });
    loadFavourites(query);
  }, [loadFavourites, userId]);

  if (errorMessage) return <Alert message={errorMessage} success={false} />;

  return (
    <>
    <div className="favourites">
      <div className="side-bar"></div>
      <h2>My Favourites</h2>
      <div className="favourites-grid">
        {(favourites.length > 0 ) ? (favourites.map(favourite => {
          const property = favourite.propertyListing;
          return (
            <div className="favourite-card" key={property._id + favourite._id}>
              <button
                type="button"
                className="view-popup-button"
                onClick={(e) => handleViewPopup(property)}
              >
                <h4>{property.title}</h4>
              </button>
              <button
                id={favourite._id}
                className="remove-favourite-button"
                onClick={(e) => handleRemoveFavourite(favourite._id)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          );
        })) : (<Alert message="No favourites to show" />)
      }
      </div> 
    </div>
    {
      showPopup && popupProperty &&
        <div className="popup-wrapper">
          <div className="popup-inner">
            <PropertyCard {...popupProperty} />
            <button className="close-popup-button" onClick={handleClosePopup} >
              <FontAwesomeIcon icon={faTimes} />
              Close
              </button>
          </div>
        </div>
    }
    </>
  );
};

export default Favourites;
