import React from "react";

export default function Header(props) {
  return (
    <div className="cart">
      <h1> Cart:{props.data.cardItems.length}</h1>
    </div>
  );
}
