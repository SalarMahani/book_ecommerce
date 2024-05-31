import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
function Item(props) {
  const handleImageClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={"item"}>
      <Link to={`/book/${props.id}`}>
        <img onClick={handleImageClick} src={props.image} alt={"book"} />
      </Link>

      <div className="item-price-description">
        <p>{props.name}</p>
        <p>{props.price}</p>
        {/*{props.price}*/}
      </div>
    </div>
  );
}

export default Item;
