import Book from "./Book";
import "../css/shelf.css";
const Shelf = ({ books, name }) => {
  return (
    <div className="shelf">
      <div className="card">
        <span>
          <hr className="bottomline" />
        </span>
        <div
          className="d-flex flex-row align-items-center justify-content-between"
          // style={{ width: "100px", height: "20px" }}
        >
          <div className="target">
            <img
              src="https://i.imgur.com/xM7KbTK.png"
              alt="https://i.imgur.com/xM7KbTK.png"
              width="100"
              className="board"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="target-text text-left">
            <button
              style={{
                background: "#ECFFDC",
                border: "0px",
                borderRadius: "20%",
                fontWeight: "bolder",
                fontFamily: "cursive",
                fontSize: '15px'
              }}
            >
              {name}
            </button>
            <span>
              <hr className="upperline" />
            </span>
          </div>
        </div>
      </div>
      <div>
        {books.map((book, key) => (
          <Book
            data={book}
            bookId={book.id}
            key={key}
            shelf={book.shelf}
            className="fade bookshelf-books"
          />
        ))}
      </div>
    </div>
  );
};
export default Shelf;
