import React, { useContext } from "react";
import "./CSS/BookCategory.css";
import { ShopContext } from "../Context/ShopContext";
import EnglishBanner from "../Components/EnglishBanner/EnglishBanner";
import TranslatedBanner from "../Components/TranslatedBanner/TranslatedBanner";
import Item from "../Components/Item/Item";
import allBooksData from "../Components/Assets/allBooks";
function BookCategory(props) {
  const allBooks = useContext(ShopContext);
  ///ss
  if (props.category === "translated") {
    return (
      <div>
        <TranslatedBanner />
        <div className="shopCategoryProduct">
          {allBooksData.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  l
                  image={item.image}
                  price={item.price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <EnglishBanner />
        <div className="shopCategoryProduct">
          {allBooksData.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}

export default BookCategory;
