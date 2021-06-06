import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import About from "./Components/About";
import Contact from "./Components/Contact";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Link to="/">About</Link>
      <Link to="/Contact">contact</Link>
      <Switch>
      <Route exact path="/Contact" component={Contact} />
        <Route path="/" component={About} />
        
      </Switch>
    </div>
  );
}
