import "./reset.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./Pages/Author";
import Home from "./Pages/Home";
import EnglishBooks from "./Pages/EnglishBooks";
import TranslatedBooks from "./Pages/TranslatedBooks";
import Book from "./Pages/Book";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/english-books"} element={<EnglishBooks />} />
          <Route path={"/translated-books"} element={<TranslatedBooks />} />
          <Route path={"/author"} element={<Author />} />
          <Route path={"/book"} element={<Book />} />
          <Route path={":bookId"} element={<Book />} />
          <Route path={":cart"} element={<Cart />} />
          <Route path={":loginSignUp"} element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
