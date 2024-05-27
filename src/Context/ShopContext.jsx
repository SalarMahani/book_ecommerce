import React, { createContext } from "react";
import AllBooks from "../Components/Assets/allBooks";
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { AllBooks };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
