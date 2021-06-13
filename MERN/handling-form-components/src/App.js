
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstname,setname] = useState("");
  const [lastname,setlname] = useState("");
  const [fullName,setFullName] = useState("");
  function changefname(event){
    setname(event.target.value);

  }
  function changelname(event){
    setlname(event.target.value);

  }
  function buttonClicked(event){
    event.preventDefault();
    setFullName(firstname + " " + lastname);
  }
  return (
    <div className="App">
      <h1>login {fullName}</h1>
      <h2>welcome {firstname +" " + lastname}</h2>
      <form>
        <input onChange={changefname} type="text" placeholder="username" />
        <input onChange={changelname} type="text" placeholder="lastname" />
        <button onClick={buttonClicked}>submit</button>
        </form>
    </div>
  );
}
