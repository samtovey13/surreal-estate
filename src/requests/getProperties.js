import axios from "axios";

const getProperties = async (query) => {
  let response;
  if (query) {
    response = await axios
      .get(`http://localhost:4000/api/v1/PropertyListing/${query}`)
      .catch((error) => error);
  } else {
    response = await axios
    .get("http://localhost:4000/api/v1/PropertyListing/")
    .catch((error) => error);
  }
  
  return response;
};

export default getProperties;
