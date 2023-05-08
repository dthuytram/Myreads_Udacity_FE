import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shelves from "./inform/shelf_list/Shelves";
import * as BooksAPI from "./inform/js/BooksAPI";
import Search from "./inform/shelf_search/Search";
import Book from "./inform/shelf_list/Book";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((resp) => {
      setBooks(resp);
    });
  }, []);

  const updateBook = (book, shelf) => {
    // if (shelf.trim() === "") return;
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      setBooks((prev) => {
        const newJobs = [...prev.filter((item) => item.id !== book.id), book];
        return newJobs;
      });
    });
  };

  console.log(books);
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            exact
            path="/"
            element={<Shelves books={books} />}
          />
          <Route
            exact
            path="/search"
            element={<Search books={books} updateBook={updateBook} />}
          />
          <Route
            exact
            path="/book/:id"
            element={
              <Book
                data={books}
                bookId={books.id}
                key={books.id}
                shelf={books.shelf}
                updateBook= {updateBook}
                // thumbnail={books.imageLinks.thumbnail}
                // subTitle= {books.imageLinks.subtitle}
                className="fade bookshelf-books"
              />
            }
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
