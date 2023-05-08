import Shelf from "../shelf_list/Shelf";
const ShelfByType = ({ books, updateBook }) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <Shelf
            name="Currently Reading"
            books={books.filter((b) => b.shelf === "currentlyReading")}
            color="#777777"
          />
          <Shelf
            name="Want to read"
            books={books.filter((b) => b.shelf === "wantToRead")}
            color="#777777"
          />
          <Shelf
            name="Read"
            books={books.filter((b) => b.shelf === "read")}
            color="#3A528F"
          />
        </div>
      </div>
    </div>
  );
};

export default ShelfByType;
