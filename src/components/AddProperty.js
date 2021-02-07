import React, {useState} from "react";
import "../styles/AddProperty.css";
import createProperty from "../requests/createProperty";

import Alert from './Alert';
import AddPropertyForm from './AddPropertyForm';

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "testing error/success message",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleAddProperty = async (event) => {
    event.preventDefault();
    setAlert({
      message: "",
      isSuccess: false,
    });
    const res = await createProperty(fields);
    if (res.status === 201) {
      setAlert({
        message: "Success! Property added.",
        isSuccess: true,
      });
    } else {
      setAlert({
        message: "Oops! Something went wrong. Property couldn't be added.",
        isSuccess: false,
      });
    }
  };
    
  return (
    <div className="add-property-container">

    <div className="add-property">
      {alert.message && (
        <Alert message={alert.message} success={alert.isSuccess} />
      )}
      <AddPropertyForm
        fields={fields}
        handleFieldChange={handleFieldChange}
        handleSubmit={handleAddProperty}
      />
    </div></div>
  );
};

export default AddProperty;
