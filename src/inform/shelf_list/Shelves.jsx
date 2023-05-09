import ShelfByType from "../shelf_list/ShelfByType";
import { Link } from "react-router-dom";

const Shelves = ({ books }) => {
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ShelfByType books={books} />
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    </>
  );
};
export default Shelves;
