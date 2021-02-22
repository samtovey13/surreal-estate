import axios from "axios";

const deleteFavouriteById = async (id, query) => {
  let response;
  if (query) {
    response = await axios
      .delete(`http://localhost:4000/api/v1/Favourite/${id}?${query}`)
      .catch((error) => error);
  }
  return response;
};

export default deleteFavouriteById;
