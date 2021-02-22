import '../styles/App.css';
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from "./AddProperty";
import Favourites from "./Favourites";

function App() {

  const [userId, setUserId] = useState("123");

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
            <Properties userId={userId} />
          </Route>
          <Route exact path="/favourites">
            <Favourites userId={userId} />
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
