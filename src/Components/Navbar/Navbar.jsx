import React from "react";
import "./Navbar.css";

// import pictures
import logo from "../Assets/books.png";
import cartIcon from "../Assets/shopping-cart.png";

const Navbar = () => {
  return (
    <div className={"navbar"}>
      <div className={"navLogo"}>
        <img className={"logo"} src={logo} alt={"books"} />
        <p>جست و جو گر</p>
      </div>
      <ul className={"navMenu"}>
        <li>
          خانه
          <hr />
        </li>
        <li>کتاب ها</li>
        <li>درباره نویسنده</li>
      </ul>
      <div className={"navLoginCart"}>
        <button>ورود</button>
        <img className={"cartIcon"} src={cartIcon} alt={"cart icon"} />
        <div className={"navCartCount"}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
