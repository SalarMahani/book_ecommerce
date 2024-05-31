import React from "react";
import "./DescriptionBox.css";
function DescriptionBox(props) {
  const { book } = props;
  const title = book.language === "english" ? "Description" : "خلاصه";
  return (
    <div
      className={
        book.language === "english"
          ? "EnglishDescriptionBox"
          : "farsiDescriptionBox"
      }
    >
      <div className="descriptionNavigator">
        <div className="descriptionNavBox">{title}</div>
      </div>
      <div className={"bookDescription"}>
        <p>{book.description}</p>
      </div>
    </div>
  );
}

export default DescriptionBox;
