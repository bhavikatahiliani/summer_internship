import React from "react";
import { FirstName, LastName } from "./App";
function CompC() {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <LastName.Consumer>{
(lname)=>{
  return <h1> HELLO my name is {fname} {lname} </h1>;
}}
             </LastName.Consumer> 
        }}
      </FirstName.Consumer>
    </>
  );
}

export default CompC;
