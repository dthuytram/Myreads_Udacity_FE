import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as BookAPI from "../js/BooksAPI";
import Book from "./Book";

const BookDetail = ({ updateBook }) => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    BookAPI.get(id).then((response) => {
      setBook(response);
    });
  }, [id]);
  return (
    (book) ? (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{book.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book data={book} bookId={id} shelf={book.shelf} />
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Link to="/">Home</Link> | <Link to="/search">Search</Link>
      </div>
    </div>
  ) : (
    <>
      <div className="bookshelf">
        <h2 className="bookshelf-title">No data proper for {id} </h2>
      </div>
      <div className="">
        <Link to="/">Home</Link> | <Link to="/search">Search</Link>
      </div>
    </>
  ));
};
export default BookDetail;
