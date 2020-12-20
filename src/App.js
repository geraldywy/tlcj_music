import React from "react"
import Home from "./components/Home"
import MusicPage from "./components/MusicPage"
import Socials from "./components/Socials"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/socials">
          <Socials />
        </Route>
        <Route path="/music">
          <MusicPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
