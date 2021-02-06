import React from "react";
import "../styles/AddProperty.css";
// import createProperty from '../requests/createProperty';

const AddProperty = ( fields, setFields, handleSubmit ) => {
  // const initialState = {
  //   fields: {
  //     title: "",
  //     type: "Flat",
  //     bedrooms: "",
  //     bathrooms: "",
  //     price: "",
  //     city: "Manchester",
  //     email: "",
  //   },
  //   alert: {
  //     message: "",
  //     isSuccess: false,
  //   },
  // };
  // const [fields, setFields] = useState(initialState.fields);
  // const [alert, setAlert] = useState(initialState.alert);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setAlert({
  //     message: "",
  //     isSuccess: false,
  //   });
  //   const res = await createProperty(fields);
  //   if (res.status === 201) {
  //     setAlert({
  //       message: "Success! Property added.",
  //       isSuccess: true,
  //     });
  //   } else {
  //     setAlert({
  //       message: "Oops! Something went wrong. Property couldn't be added.",
  //       isSuccess: false,
  //     });
  //   }
  // };;

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleSubmit}>
        <ul className="form-ul">
          <li>
            <label htmlFor="title">Title:</label>
            <input
              name="title"
              type="text"
              id="title"
              placeholder="Brief description"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </li>
          <li>
            <label htmlFor="type">Type:</label>
            <select
              name="type"
              id="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </li>
          <span className="bedroom-bathroom-flex-container">
            <li className="bedroom-li">
              <label htmlFor="bedrooms">Bedrooms:</label>
              <input
                name="bedrooms"
                type="number"
                id="bedrooms"
                min="0"
                max="100"
                placeholder="e.g. 2"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </li>
            <li className="bathroom-li">
              <label htmlFor="bathrooms">Bathrooms:</label>
              <input
                name="bathrooms"
                type="number"
                id="bathrooms"
                min="0"
                max="20"
                placeholder="e.g. 1"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </li>
          </span>
          <li>
            <label htmlFor="price">Price:</label>
            <div className="currency-wrapper">
              <input
                name="price"
                type="number"
                id="price"
                min="0"
                placeholder="250,000"
                value={fields.price}
                onChange={handleFieldChange}
              />
              <span className="currency-symbol">£</span>
            </div>
          </li>
          <li>
            <label htmlFor="city">City:</label>
            <select
              name="city"
              type="select"
              id="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Main contact"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </li>
          <li>
            <button className="add-property-button" type="submit">
              Add Property
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default AddProperty;
