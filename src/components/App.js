import '../styles/App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Alert from "./Alert";
import createProperty from "../requests/createProperty";

function App() {
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
      message: "bjdskbjfs",
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
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route exact path="/add-property">
          <div className="add-property-container">
            {alert.message && (
              <Alert message={alert.message} success={alert.isSuccess} />
            )}
            <AddProperty
              fields={fields}
              handleFieldChange={handleFieldChange}
              handleSubmit={handleAddProperty}
            />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
