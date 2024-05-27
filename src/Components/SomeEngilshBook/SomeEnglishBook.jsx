import React from "react";
import "./SomeEnglishBook.css";
import Item from "../Item/Item";
import someEnglishBook from "../Assets/SomeEnglishBooks";
function SomeEnglishBook(props) {
  return (
    <div className={"someEnglishBooks"}>
      <h1>کتاب های زبان اصلی</h1>
      <hr />
      <div className="collections">
        {someEnglishBook.map((item, i) => {
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

export default SomeEnglishBook;
