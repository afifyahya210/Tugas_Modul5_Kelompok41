import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import { UserContext } from "./UserContext";

function App() {
  const [logoutUser, setLogoutUser] = useState(false);
  return (
    <UserContext.Provider value="dikembangkan oleh Kelompok 41 Praktikum RPLBK 2021">
    <BrowserRouter>
      <div className="App">
        <h2>Login Authentication menggunakan JSON Server</h2>        
        <Switch>
          <Route exact path="/">
            <Header logoutUser={logoutUser} setLogoutUser={setLogoutUser} />
            <Home logoutUser={logoutUser} />
          </Route>
          <Route path="/login">
            <Login setLogoutUser={setLogoutUser} />
          </Route>
          <Route path="/register">
            <Register setLogoutUser={setLogoutUser} />
          </Route>       
        </Switch>
      </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
