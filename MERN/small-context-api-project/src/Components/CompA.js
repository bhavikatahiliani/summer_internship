import React, { useContext } from "react";
import CompB from "./CompB.js";
import { ChangeNum } from "../App.js";
export default function CompA() {
  const changefun = useContext(ChangeNum);
  return (
    <div>
      <CompB />
      <button
        onClick={() => {
          changefun();
        }}
      >
        Change from A
      </button>
    </div>
  );
}
