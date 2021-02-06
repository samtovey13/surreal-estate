import axios from "axios";

const createProperty = async (fields) => {
  const response = await axios
    .post("http://localhost:4000/api/v1/PropertyListing", fields)
    .catch((error) => error);
  return response;
};

export default createProperty;
