import React from "react";
function Home(props) {
  console.log("props", props.data.cardItems);
  return (
    <div>
      <div className="cart">
        <h1> Cart: {props.data.cardItems.length}</h1>
      </div>
      <div className="item">
        <img
          width="100px"
          height="100px"
          src="https://images.samsung.com/is/image/samsung/assets/us/mobile/pfs/040121/MLP-offer-card-S21Series-MB-512x288.jpg?$512_288_JPG$"
          alt="phone"
        />
        <span> Samsung </span>
        <span> price: $1000.00</span>
        <button
          onClick={() => {
            props.addToCartHandler({ price: 1000, name: "samsung" });
          }}
        >
          Add to cart
        </button>
        <button
          onClick={() => {
            props.removefromCartHandler();
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
}
export default Home;
