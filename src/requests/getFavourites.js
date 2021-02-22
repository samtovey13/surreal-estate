import axios from "axios";

const getFavourites = async (query) => {
  let response;
  if (query) {
    response = await axios
      .get(
        `http://localhost:4000/api/v1/Favourite?query=${query}&populate=propertyListing`
      )
      .catch((error) => error);
  } else {
    response = "error";
  }

  return response;
};

export default getFavourites;
