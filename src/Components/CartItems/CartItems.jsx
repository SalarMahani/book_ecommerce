import React, { useContext } from "react";
import "./CartItems.css";
import AllBooks from "../Assets/allBooks";
import { ShopContext } from "../../Context/ShopContext";
import allBook from "../Assets/allBooks";
import minus from "../Assets/minus.png";
import plus from "../Assets/plus.png";
import cartItemsData from "../Assets/CartItemData";

function CartItems(props) {
  const { AllBooks, cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const mergedData = cartItemsData.reduce((acc, item) => {
    return { ...acc, ...item };
  }, {});
  const {
    product,
    title,
    price,
    quantity,
    sum,
    cartTotal,
    total,
    discountExplanation,
    discountText,
    submit,
    buy,
  } = mergedData;
  return (
    <div className={"cartItems"}>
      <div className="mainFormat">
        <p>{product}</p>
        <p>{title}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{total}</p>
        {/*<p>Remove</p>*/}
      </div>
      <hr />
      {allBook.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartItemsFormat mainFormat">
                <img className={"bookIcon"} src={e.image} alt={"book"} />
                <p>{e.name}</p>
                <p>{e.price}</p>
                <button className={"itemsQuantity"}>
                  <img
                    onClick={() => {
                      addToCart(e.id);
                    }}
                    className={"plus"}
                    src={plus}
                    alt={"minus"}
                  />
                  {cartItems[e.id]}
                  <img
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    className={"minus"}
                    src={minus}
                    alt={"minus"}
                  />
                </button>
                <p>{e.price * cartItems[e.id]}</p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItemsDown">
        <div className="promoCode">
          <p>{discountExplanation}</p>
          <div className="promoBox">
            <input type={"text"} placeholder={discountText} />
            <button>{submit}</button>
          </div>
        </div>
        <div className="CartItemsCount">
          <h1>{cartTotal}</h1>
          <div>
            <hr />
            <div className="TotalItem">
              <h3>{total}</h3>
              <h3>{getTotalCartAmount()}</h3>
            </div>
            <button className={"buy"}>{buy}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
