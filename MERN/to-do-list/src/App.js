import React, {useState} from "react";
import "./styles.css";
import "./Todolist.js";
import Todolist from "./Todolist.js";

export default function App() {

  const [value,setvalue] = useState("");
  const [items,setitems] = useState([]);

  function store(event){

    const inputValue= event.target.value;
    setvalue(inputValue);

  }

  function checked(id){
    setitems((prevValue)=>{
      return prevValue.filter((value,index)=>{
        return index!== id ;
      });
    });
  }

  function addtolist(){
    setitems((prevValue)=>{
      return [...prevValue,value]
    });
    setvalue("");
  }

  

  return (
    <div className="App">
      <h1>TO-DO LIST </h1>
      <input type="text" name="items"  value={value} 
      onChange={store}/>
      <button onClick={addtolist}> ADD </button>

      <div>
        <ul>
          {items.map((item,index)=>{
            return <Todolist lochecked={checked} id={index} key={index} value={item} />;
          })
          }
          </ul>
        </div>

    </div>
  );
}
