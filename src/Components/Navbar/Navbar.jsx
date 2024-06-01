import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import navbarData from "../Assets/navbarData";
// import pictures
import logo from "../Assets/books.png";
import cartIcon from "../Assets/shopping-cart.png";
import dropDown from "../Assets/dropDown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

//adding data
const mergedData = navbarData.reduce((acc, item) => {
  return { ...acc, ...item };
}, {});
const {
  home,
  title,
  author,
  loginSignUp,
  seeker,
  englishBooks,
  translatedBooks,
} = mergedData;

// vab bar function
const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  let [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const dropDown_toggle = (e) => {
    menuRef.current.classList.toggle("navMenuVisible");
    e.target.classList.toggle("open");
  };
  return (
    <div className={"navbar"}>
      <div className={"navLogo"}>
        <img className={"logo"} src={logo} alt={"books"} />
        <p className={"seeker"}> {seeker}</p>
      </div>
      <img
        onClick={dropDown_toggle}
        className={"dropDown"}
        src={dropDown}
        alt={"drop down button"}
      />
      <ul ref={menuRef} className={"navMenu"}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link className={"link color"} to={"/"}>
            {home}
          </Link>
          {menu === "home" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("translated-Books");
          }}
        >
          <Link className={"link color"} to={"/translated-Books"}>
            {translatedBooks}
          </Link>
          {menu === "translated-Books" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("english-Books");
          }}
        >
          <Link className={"link color"} to={"/english-Books"}>
            {englishBooks}
          </Link>
          {menu === "english-Books" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("author");
          }}
        >
          <Link className={"link color"} to={"/author"}>
            {author}
          </Link>
          {menu === "author" ? <hr /> : <> </>}
        </li>
      </ul>
      <div className={"navLoginCart"}>
        <button className={"loginButton"}>
          <Link className={"link color loginSignUp"} to={"/loginSignUp"}>
            {loginSignUp}
          </Link>
        </button>
        <Link className={"link"} to={"/cart"}>
          <div className={"cart"}>
            <img className={"cartIcon"} src={cartIcon} alt={"cart icon"} />
            <div className={"navCartCount"}>{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
