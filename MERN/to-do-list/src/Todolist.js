import React from 'react';

function Todolist(props){
  return( 
  <li onClick={()=>{
    return props.lochecked(props.id);
  }}
  >
  {props.value}{""}
  </li>
  ); 
}
export default Todolist;