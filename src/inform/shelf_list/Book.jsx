import ShelfChanger from "../list_update/ShelfChanger";
import { Link } from "react-router-dom";
import "../css/book.css";
const Book = ({ data, bookId, shelf }) => {
  return (
    <>
      <div key="front" className="book-content book-front">
        <img
          src={(data.imageLinks && data.imageLinks.thumbnail) || ""}
          alt={(data.imageLinks && data.imageLinks.subtitle) || ""}
          style={{
            width: 128,
            height: 192,
          }}
        />
        <div className="book-title">{data.title}</div>
        <div className="book-author">
          {data.authors && data.authors[0] ? data.authors[0] : "No Author..."}
        </div>
        <div className="book-more-info">
          <Link to={`/book/${data.id}`}>More info</Link>
        </div>
      </div>
      <div key="back" className="book-content book-back">
        <ShelfChanger value={shelf} bookId={bookId} />
      </div>
    </>
  );
};
export default Book;
