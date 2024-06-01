import React from "react";
import "./Footer.css";
import footerData from "../Assets/footerData";
import logo from "../Assets/books.png";

import navbarData from "../Assets/navbarData";
function Footer(props) {
  const mergedData = footerData.reduce((acc, item) => {
    return { ...acc, ...item };
  }, {});
  const { title, product, about, contact, rule } = mergedData;

  return (
    <div className={"footer"}>
      <div className="footerLogo">
        <img src={logo} alt={"logo"} />
        <p className={"seeker_logo"}>{title}</p>
      </div>
      <ul className="footerLinks">
        <li>{product}</li>
        <li>{about}</li>
        <li>{contact}</li>
      </ul>
      <div className="footerCopyright">
        <hr />
        <p className={"rule"}>{rule}</p>
      </div>
    </div>
  );
}

export default Footer;
