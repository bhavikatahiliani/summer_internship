import React from "react";
import "./styles.css";
import Login from "./Login.js";
export default function App() {
  const isloggedin = true;

  return (
    <div className="App">
      {isloggedin ? <h1 id="text">WELCOME</h1> : <Login />}
    </div>
  );
}
