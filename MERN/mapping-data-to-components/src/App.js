import React from "react";
import "./styles.css";
import Card from "./Card.js";
import zoo from "./zoo.js";

function insertCard(zoo){
return(
<Card 
key = {zoo.id}
name={zoo.name}
source={zoo.source}
para={zoo.para}
/>
);

}
export default function App() {
  return (
    <div className="App">
    {
      zoo.map(insertCard)
    }
    </div>
  );
}