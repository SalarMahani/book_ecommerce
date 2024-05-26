import React from "react";
import "./Hero.css";
import knight from "../Assets/knight.png";
import arrow from "../Assets/right-arrow.png";
function Hero(props) {
  return (
    <div className={"hero"}>
      <div className="hero-left">
        <h2>new Arrivals only</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img className={"arrow"} src={arrow} alt={"arrow"} />
        </div>
      </div>
      <div className="hero-right">
        <img className={"knight"} src={knight} alt={"knight"} />
      </div>
    </div>
  );
}

export default Hero;
