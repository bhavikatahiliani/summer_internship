import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: ""
  });

  function changefname(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const value = event.target.value;
    const input = event.target.name;

    if (input === "fname") {
      setfullname((prevValue)=>{
        console.log(prevValue);
return{fname: value,
lname: prevValue.lname
};
      });
    }
    else if(input === "lname")
    setfullname((prevValue)=>{
      console.log(prevValue);
return{
  fname: prevValue.fname,
lname: value
};
    });
  }

  function buttonClicked(event) {
    event.preventDefault();
  }
  return (
    <div className="App">
      <h1>LOGIN </h1>
      <h2>WELCOME {fullname.fname} {fullname.lname} </h2>
      <form>
        <input
          name="fname"
          onChange={changefname}
          type="text"
          placeholder="FIRST NAME"
        />
        <br />
        <input
          name="lname"
          onChange={changefname}
          type="text"
          placeholder="LAST NAME"
        />
        <button onClick={buttonClicked}> SUBMIT </button>
      </form>
    </div>
  );
}
