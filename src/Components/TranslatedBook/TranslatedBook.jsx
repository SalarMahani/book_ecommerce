import React from "react";
import "./TranslatedBook.css";
import translatedBook from "../Assets/TranslatedBook";
import Item from "../Item/Item";
function TranslatedBook() {
  return (
    <div className={"translatedBooks"}>
      <h1 className={"translatedBooksTitle"}>کتاب های ترجمه شده</h1>
      <hr />

      <div className="translated-Book">
        {translatedBook.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TranslatedBook;
