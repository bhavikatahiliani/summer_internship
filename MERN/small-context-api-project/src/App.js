import "./styles.css";
import CompA from "./Components/CompA.js";
import { createContext, useState } from "react";

const Number = createContext();
const ChangeNum = createContext();
export default function App() {
  const [number, setnumber] = useState(1);
  function IncrementNumber() {
    setnumber(number + 1);
  }
  return (
    <div className="App">
      <Number.Provider value={number}>
        <ChangeNum.Provider value={IncrementNumber}>
          <CompA />
        </ChangeNum.Provider>
      </Number.Provider>
    </div>
  );
}
export { Number, ChangeNum };
