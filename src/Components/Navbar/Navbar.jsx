import React, { useState } from "react";
import "./Navbar.css";
import navbarData from "../Assets/navbarData";
// import pictures
import logo from "../Assets/books.png";
import cartIcon from "../Assets/shopping-cart.png";
import { Link } from "react-router-dom";

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
  let [menu, setMenu] = useState("home");
  return (
    <div className={"navbar"}>
      <div className={"navLogo"}>
        <img className={"logo"} src={logo} alt={"books"} />
        <p> {seeker}</p>
      </div>
      <ul className={"navMenu"}>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link className={"link"} to={"/"}>
            {home}
          </Link>
          {menu === "home" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("translated-Books");
          }}
        >
          <Link className={"link"} to={"/translated-Books"}>
            {translatedBooks}
          </Link>
          {menu === "translated-Books" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("english-Books");
          }}
        >
          <Link className={"link"} to={"/english-Books"}>
            {englishBooks}
          </Link>
          {menu === "english-Books" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("author");
          }}
        >
          <Link className={"link"} to={"/author"}>
            {author}
          </Link>
          {menu === "author" ? <hr /> : <> </>}
        </li>
      </ul>
      <div className={"navLoginCart"}>
        <button>
          {loginSignUp}
          {/*<Link className={"link"} to={"/loginSignUp"}></Link>*/}
        </button>
        <Link className={"link"} to={"/cart"}>
          <img className={"cartIcon"} src={cartIcon} alt={"cart icon"} />
        </Link>
        <div className={"navCartCount"}>0</div>
      </div>
    </div>
  );
};
export default Navbar;
