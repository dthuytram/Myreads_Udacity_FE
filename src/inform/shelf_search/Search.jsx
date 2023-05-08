import { useState, useEffect } from "react";
import * as BooksAPI from "../js/BooksAPI";
import Book from "../shelf_list/Book";
import { Link } from "react-router-dom";
const Search = ({ books, updateBook }) => {
  const [form, setForm] = useState("");
  const [results, setResults] = useState([]);
  const [isEmpty, setEmpty] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isShow, setShow] = useState(true);

  const handleChange = (e) => {
    const from = e.target.value;
    setForm(from);
    setResults([]);
    console.log("form", form);
    searchBooks(from);
  };
  const searchBooks = (answer) => {
    console.log("++++++an: ", answer);
    console.log("form: ", form);
    if (answer.trim() === "") {
      return;
    }
    setLoading(true);
    console.log("answerRemoveWhiteSpace: ", answer.replace(/\s/g, "").trim());
    BooksAPI.search(answer).then((response) => {
      // If error -> return [], else return response
      // console.log("response.error: ", form === "" || form === undefined);
      console.log("response: ", response);
      if (form === "" || form === undefined) {
        setResults([]);
      }
      setEmpty(!!response.error);
      console.log("setEmpty: ", isEmpty);
      console.log("setBooks: ", books);

      // Filter books and add
      response.forEach((item) => {
        const myBook = books.filter((element) => element.id === item.id);
        console.log("results");
        console.log(myBook);
        if (myBook) item.shelf = myBook.shelf;
        console.log("item");
        console.log(item);
      });
      setResults(response);
      console.log("====results1");
      console.log(results);
    });
  };
  const showSearchPage = () => {
    console.log("===search: ", isShow);
    setShow(!isShow);
    console.log("===search1: ", isShow);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search">
          <Link to="/">Back to home</Link>
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(event) => handleChange(event)}
            value={form}
            placeholder="Search by title or author"
          />
        </div>
      </div>

      {isLoading && (
        <div className="results-loading">
          <h2>Loading.....</h2>
        </div>
      )}
      {isEmpty && (
        <div className="no-results">
          Sorry, no results were found.
          <br />
          Your search '<b>{form}</b>' did not match any books.
          <span className="emotion">¯\_(ツ)_/¯</span>
        </div>
      )}

      {results.length > 0 && (
        <div className="results-details">
          <b>{results.length}</b> results found.
        </div>
      )}
      <div className="search-books-results">
        <ol className="books-grid">
          {results.map((book, key) => (
            <Book
              data={book}
              bookId={book.id}
              key={key}
              shelf={book.shelf}
              updateBook={updateBook}
              // thumbnail={book.imageLinks.thumbnail}
              // subTitle= {books.imageLinks.subtitle}
              className="fade bookshelf-books"
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Search;
