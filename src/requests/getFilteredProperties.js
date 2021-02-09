import axios from 'axios';

const getFilteredProperties = async (search) => {
  const response = await axios
    .get(`http://localhost:4000/api/v1/PropertyListing/${search}`)
    .catch((error) => error);
  return response;
};

export default getFilteredProperties;