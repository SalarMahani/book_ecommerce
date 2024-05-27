import React from "react";
import "./EnglishBanner.css";
import knight from "../Assets/knight-v4.png";
import arrow from "../Assets/right-arrow.png";

function EnglishBanner(props) {
  return (
    <div>
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
    </div>
  );
}

export default EnglishBanner;
