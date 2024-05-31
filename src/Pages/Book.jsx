import React, { useContext } from "react";
import "./CSS/Book.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import allBooksData from "../Components/Assets/allBooks";
import BookDisplay from "../Components/BookDisplay/BookDisplay";
import DescriptionBox from "../Components/DiscriptionBox/DescriptionBox";

const Book = (props) => {
  // const { allBook } = useContext(ShopContext);
  // const { bookId } = useParams();
  // console.log(allBooksData);
  // console.log(props.id);
  const { bookId } = useParams();
  // console.log(bookId);
  const theBook = allBooksData.find((e) => e.id === Number(bookId));

  console.log("the book", theBook);
  // const theBook = allBooksData.find((e) => e.id === Number(bookId));
  return (
    <div>
      <Breadcrum book={theBook} />
      <BookDisplay book={theBook} />
      <DescriptionBox book={theBook} />
    </div>
  );
};

export default Book;
