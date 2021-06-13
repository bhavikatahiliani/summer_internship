import React,{useEffect, useState} from 'react';
import "./styles.css";

export default function App() {
  const [number, setnumber] = useState(0);
  useEffect(()=>{
    if(number === 5){
    alert("hello world you have reached 5");
    }
  });
  return (
    <div className="App">
      <h1>Hello {number}</h1>
      <button onClick={()=> {
        
        setnumber(number + 1);
        }}>
          {" "} Change
        </button>
    </div>
  );
}
