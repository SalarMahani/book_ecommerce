import React from "react";
import "../Hero/Hero.css";
import knight from "../Assets/knight-v3.png";
import arrow from "../Assets/right-arrow.png";
import heroData from "../Assets/heroData";

const mergedData = heroData.reduce((acc, item) => {
  return { ...acc, ...item };
}, {});
const { title_one, title_two, title_three, buttonTitle_one } = mergedData;

function Hero(props) {
  return (
    <div className={"hero"}>
      <div className="hero-left">
        <div className={"heroInfo"}>
          <div className="hand-hand-icon">
            <p>{title_one}</p>
          </div>
          <p>{title_two}</p>
          <p>{title_three}</p>
        </div>
        <div className="hero-latest-btn">
          <img className={"arrow"} src={arrow} alt={"arrow"} />

          <div>{buttonTitle_one}</div>
        </div>
      </div>
      <div className="hero-right">
        <img className={"knight"} src={knight} alt={"knight"} />
      </div>
    </div>
  );
}

export default Hero;
