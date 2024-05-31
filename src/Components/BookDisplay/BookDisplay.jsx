import React, { useContext } from "react";
import "./BookDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
function BookDisplay(props) {
  const { book } = props;
  const { addToCart } = useContext(ShopContext);
  let language, page, order, price, buy;
  if (book.language === "english") {
    language = "language";
    page = "page";
    order = "order of reading ";
    price = "price";
    buy = "Download";
  } else {
    language = "زبان";
    page = "تعداد صفحه";
    order = "ترتیب مطالعه";
    price = "قیمت";
    buy = "افزودن به سبد خرید";
  }
  // const language = book.language === "انگلیسی" ? "language" : "زبان";
  // const page= book.language === "انگلیسی" ? "language" : "زبان";
  // console.log("😀😀");
  // console.log(book);

  return (
    <div className={"bookDisplay"}>
      <div className="productDisplayLeft">
        <div className="productDisplayImg">
          <img
            className={"productDisplayMainImg"}
            src={book.image}
            alt={"book"}
          />
        </div>
      </div>
      <div
        className={
          book.language === "english"
            ? "englishProductDisplayRight"
            : "farsiProductDisplayRight"
        }
      >
        <h1 className={"bookName"}>{book.name}</h1>
        <div className="bookInformation">
          <div className="language">
            {language}:<span>{book.language}</span>
          </div>
          <div className="bookOrder">
            {page}:<span>{book.pageNumber}</span>
          </div>
          <div className="bookOrder">
            {order}:<span>{book.bookNumber}</span>
          </div>
          <div className="productPrice">
            {price}:<span>{book.price}</span>
          </div>
        </div>
        <button
          className={"buyBtn"}
          onClick={() => {
            addToCart(book.id);
          }}
        >
          {buy}
        </button>
      </div>
    </div>
  );
}

export default BookDisplay;
