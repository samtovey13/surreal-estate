import '../styles/App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <Properties />
          </Route>
          <Route exact path="/add-property">
            <AddProperty />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
