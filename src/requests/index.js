import axios from "axios";

// Switch to localhost if using your own local version of the API //
// const API = "http://localhost:4000/api/v1";
const API = "https://surreal-estate-api-13.herokuapp.com/api/v1";

const createProperty = async (fields) => {
  const response = await axios
    .post(`${API}/PropertyListing`, fields)
    .catch((error) => error);
  return response;
};

const getProperties = async (query) => {
  let response;
  if (query) {
    response = await axios
      .get(`${API}/PropertyListing/${query}`)
      .catch((error) => error);
  } else {
    response = await axios
      .get(`${API}/PropertyListing`)
      .catch((error) => error);
  }
  return response;
};

const addFavourite = async (propertyId, userId) => {
  const response = await axios
    .post(`${API}/Favourite`, {
      propertyListing: propertyId,
      fbUserId: userId,
    })
    .catch((error) => error);
  return response;
};

const getFavourites = async (query) => {
  let response;
  if (query) {
    response = await axios
      .get(`${API}/Favourite?query=${query}&populate=propertyListing`)
      .catch((error) => error);
  } else {
    response = "error";
  }
  return response;
};

const deleteFavouriteById = async (id, query) => {
  let response;
  if (query && id) {
    response = await axios
      .delete(`${API}/Favourite/${id}?${query}`)
      .catch((error) => error);
  }
  return response;
};

export {
  createProperty,
  getProperties,
  addFavourite,
  getFavourites,
  deleteFavouriteById,
};
