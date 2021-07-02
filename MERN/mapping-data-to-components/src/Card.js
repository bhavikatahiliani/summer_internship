import React from "react";
function Card(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <img alt="zoo animals" src={props.source} />
      <p> {props.para} </p>
    </div>
  );
}

export default Card;
