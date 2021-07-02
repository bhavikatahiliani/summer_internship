import React, { useContext } from "react";
import { FirstName, LastName } from "./App";
function CompC() {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  return <>
  <h1> MY NAME IS {fname} {lname} </h1>
  </>;
}

export default CompC;
