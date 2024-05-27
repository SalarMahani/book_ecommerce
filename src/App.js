import "./reset.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Author from "./Pages/Author";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import BookCategory from "./Pages/BookCategory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"/english-books"}
            element={<BookCategory category={"notTranslated"} />}
          />
          <Route
            path={"/translated-books"}
            element={<BookCategory category={"translated"} />}
          />
          <Route path={"/author"} element={<Author />} />
          <Route path={"/book"} element={<Book />} />
          <Route path={":bookId"} element={<Book />} />
          <Route path={":cart"} element={<Cart />} />
          <Route path={":loginSignUp"} element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
