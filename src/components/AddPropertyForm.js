import React from "react";
import '../styles/AddPropertyForm.css';
import PropTypes from "prop-types";

const AddPropertyForm = ({ fields, handleFieldChange, handleSubmit }) => {
  return (
    <form data-testid="add-property-form" onSubmit={handleSubmit}>
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
  );
};

AddPropertyForm.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    bedrooms: PropTypes.string,
    bathrooms: PropTypes.string,
    price: PropTypes.string,
    city: PropTypes.string,
    email: PropTypes.string,
  }),
  handleFieldChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequired;

export default AddPropertyForm;
