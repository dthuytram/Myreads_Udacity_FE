import { useState } from "react";
import ShelfByType from "../shelf_list/ShelfByType";
import Search from "../shelf_search/Search";
import { render } from "react-dom";
import { Link } from "react-router-dom";

const Shelves = ({ books}) => {
  const [isShowSearchPage, setShowSearchPage] = useState(false);

  console.log("alo", isShowSearchPage);

  return (
    <>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ShelfByType books={books}/>
          <div className="open-search">
            <Link to="/search">Search</Link>
          </div>
        </div>
    </>
  );
};
export default Shelves;
