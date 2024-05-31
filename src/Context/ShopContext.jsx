import React, { createContext, useContext, useState } from "react";
import AllBooks from "../Components/Assets/allBooks";
import allBook from "../Components/Assets/allBooks";
import allBooks from "../Components/Assets/allBooks";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < AllBooks.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (bookId) => {
    setCartItems((prev) => ({
      ...prev,
      [bookId]: prev[bookId] + 1,
    }));
    // console.log(cartItems);
  };
  const removeFromCart = (bookId) => {
    setCartItems((prev) => ({
      ...prev,
      [bookId]: prev[bookId] - 1,
    }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = AllBooks.find((book) => book.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    AllBooks,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  // console.log("😀😀😀", cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
