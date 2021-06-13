import React, {useState} from 'react';
import "./styles.css";

export default function App() {
  const [Isstyle,setStyle] = useState();
  function changestyling(){
    setStyle(!Isstyle);
  }

  const styleheading = {
    textDecoration: "line-through",
    backgroundColor: "blue"
  }
  return (
    <div className="App">
      
      <h1 style={Isstyle?styleheading:null}>Hello this changed the style</h1>
      
      <button onClick={changestyling}>change style</button>
    </div>
  );
}
