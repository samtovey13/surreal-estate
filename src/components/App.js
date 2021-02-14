import '../styles/App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from "./AddProperty";

function App() {

  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.id);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserId("");
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
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
