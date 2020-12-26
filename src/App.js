import React from "react"
import Home from "./components/Home"
import MusicPage from "./components/MusicPage"
import Socials from "./components/Socials"
import Blog from "./components/Blog"
import About from "./components/About"

import {
  Router as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({ basename: '/tlcj_music' });

function App() {
  return (
    <Router history={history}>
      <Switch>
      <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
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
