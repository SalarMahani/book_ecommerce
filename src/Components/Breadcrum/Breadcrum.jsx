import React from "react";
import "./Breadcrum.css";
import arrowIcon from "../Assets/left-arrow.png";
import breadcrumData from "../Assets/breadcrumData";
import navbarData from "../Assets/navbarData";
const mergedData = navbarData.reduce((acc, item) => {
  return { ...acc, ...item };
}, {});
const { home, title } = mergedData;
function Breadcrum(props) {
  const { book } = props;
  return (
    <div className={"breadcrum"}>
      <span>{home}</span> <img src={arrowIcon} alt={"arrow"} />
      <span>{title}</span> <img src={arrowIcon} alt={"arrow"} />
      <span>{book.name}</span>
    </div>
  );
}

export default Breadcrum;
