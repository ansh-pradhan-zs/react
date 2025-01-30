import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";
import Books from "./pages/Books";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <>
      <nav className="m-3">
        <ul>
          <li className="flex flex-row items-center gap-5">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={`/books`}>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </>
  );
}

export default App;
