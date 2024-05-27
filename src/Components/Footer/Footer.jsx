import React from "react";
import "./Footer.css";
import whatsApp from "../Assets/whatsapp.png";
import telegram from "../Assets/telegram.png";
import instagram from "../Assets/instagram.png";
import logo from "../Assets/books.png";
function Footer(props) {
  return (
    <div className={"footer"}>
      <div className="footerLogo">
        <img src={logo} alt={"logo"} />
        <p>جست و جو گر</p>
      </div>
      <ul className="footerLinks">
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialIcon">
        <div className="footerIconsContainer">
          <img src={instagram} alt={"instagram"} />
        </div>
        <div className="footerIconsContainer">
          <img src={telegram} alt={"telegram"} />
        </div>
        <div className="footerIconsContainer">
          <img src={whatsApp} alt={"whatsApp"} />
        </div>
      </div>
      <div className="footerCopyright">
        <hr />
        <p>Copyright @ 2024 -All Right Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
