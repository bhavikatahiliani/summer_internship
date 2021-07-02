import "./styles.css";
import CompA from "./CompA";
import { createContext } from "react";
const FirstName = createContext();
const LastName = createContext();
export default function App() {
  return (
    <FirstName.Provider value={"BUSH"}>
      <LastName.Provider value={"SAMA"}>
        <CompA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}

export { FirstName, LastName };
