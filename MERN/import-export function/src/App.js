import "./styles.css";
import React from "react";
import favnumber, { multiplyfav, dividefav } from "./Heading.js";

export default function App() {
  return (
    <div className="App">
      <h1>This is my {favnumber} </h1>
      <h2>Multiplication of my favourite number is {multiplyfav()}</h2>
      <h2>Division of my favourite number is {dividefav()}</h2>
    </div>
  );
}
