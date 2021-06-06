import React from "react";
import "./styles.css";
import Login from "./Login.js";
export default function App() {
  const isloggedin = false;

  return (
    <div className="App">
      {isloggedin ? <h1 id="demotext"> welcome to the home page</h1> : <Login /> }
      </div>
  );
}
