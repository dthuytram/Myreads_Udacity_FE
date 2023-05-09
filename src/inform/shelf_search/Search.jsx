import { useState} from "react";
import * as BooksAPI from "../js/BooksAPI";
import Book from "../shelf_list/Book";
import { Link } from "react-router-dom";

const Search = ({ books, updateBook }) => {
  const [form, setForm] = useState("");
  const [results, setResults] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  const handleChange = (e) => {
    const from = e.target.value;
    setForm(from);
    setResults([]);
    console.log("form", form);
    searchBooks(from);
  };
  const searchBooks = (answer) => {
    if (answer.trim() === "") {
      return;
    }
    BooksAPI.search(answer).then((response) => {
      if (form === "" || form === undefined) {
        setResults([]);
      }
      setEmpty(!!response.error);

      // Filter books and add
      response.forEach((item) => {
        const myBook = books.filter((element) => element.id === item.id);
        if (myBook) item.shelf = myBook.shelf;
      });
      setResults(response);
    });
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Back to home
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(event) => handleChange(event)}
            value={form}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      {isEmpty && (
        <div className="results-details">
          Sorry, no results were found.
          <br />
          Search '<b>{form}</b>' did not match any books.
        </div>
      )}

      {results.length > 0 && (
        <div className="results-details">
          <b>Total: {results.length}</b> results found.
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
              className="fade bookshelf-books"
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Search;
