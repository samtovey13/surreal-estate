import axios from "axios";

const getProperties = async () => {
  const response = await axios
    .get("http://localhost:4000/api/v1/PropertyListing/")
    .catch((error) => error);
  return response;
};

export default getProperties;
