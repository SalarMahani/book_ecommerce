import React from "react";
import "./Item.css";
function Item(props) {
  return (
    <div className={"item"}>
      <img src={props.image} alt={"book"} />
      <p>{props.name}</p>
      <div className="item-price"></div>
      {props.price}
    </div>
  );
}

export default Item;
