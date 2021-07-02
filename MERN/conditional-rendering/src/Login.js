import React from "react";

function Login()
{
return(
<div id="box">
  <form>
    <input type="text" placeholder="USERNAME" />
    <input type="password" placeholder="PASSWORD" />
    <input className="myButton" type="submit" />
    </form>
  </div>
);
}
export default Login;