import React, { useState, useCallback, useEffect } from "react";
import Alert from "./Alert";
import getFavourites from "../requests/getFavourites";
import deleteFavouriteById from '../requests/deleteFavouriteById'

const Favourites = ({userId}) => {
  const [favourites, setFavourites] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleRemoveFavourite = async (event) => {
    event.preventDefault();
    const query = JSON.stringify({ fbUserId: userId });
    const favourite = event.target.id;
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

  useEffect(() => {
    const query = JSON.stringify({fbUserId: userId });
    loadFavourites(query);
  }, [loadFavourites, userId]);

  if (errorMessage) return <Alert message={errorMessage} success={false} />;

  return (
    <div className="favourites">
      <h2>My Favourites</h2>
      <div className="favourites-grid">
        {favourites.map(favourite => {
          const property = favourite.propertyListing;
          return (
            <div className="favourite-card" key={property._id + favourite._id}>
              <h4>{property.title}</h4>
              <button id={favourite._id} className="remove-favourite-button" onClick={handleRemoveFavourite}>Remove</button>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Favourites;
