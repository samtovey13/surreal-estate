import axios from "axios";

const addFavourite = async (propertyId, userId) => {
  const response = await axios
    .post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userId,
    })
    .catch((error) => error);
  return response;
};

export default addFavourite;
