import React, { useContext } from "react";
import CompC from "./CompC";
import { FirstName } from "./App";
function CompB() {
  const fname = useContext(FirstName);
  return (
    <>
      <CompC />
      <h1> MY FIRST NAME IS {fname} </h1>
    </>
  );
}

export default CompB;
