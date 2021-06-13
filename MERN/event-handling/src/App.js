import React, {useState} from "react";
import "./styles.css";

export default function App() {
  
    const [heading, setheading]= useState("");
    const [submittedText, setSubmittext] = useState("submitted");
    const [isSubmitted, setisSubmite] = useState(false);
    function submitfun(){
      setisSubmite(isSubmitted);

    }
    function changeHeading(event){
      setheading(event.target.value);
    
  }
  
  return (
    <div className="App">
      <h1> {isSubmitted ? submittedText :"Hello " + heading} </h1>
      <input onChange={changeHeading} className="css-input" value={heading}/>
      <button onClick={submitfun} className="myButton">submit</button>
    </div>
  );
}
