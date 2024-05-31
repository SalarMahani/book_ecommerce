import React from "react";
import "./CSS/Cart.css";
import CartItems from "../Components/CartItems/CartItems";

function Cart(props) {
  return (
    <div className={"cart"}>
      <CartItems />
    </div>
  );
}

export default Cart;
