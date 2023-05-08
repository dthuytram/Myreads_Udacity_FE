import "../css/shelf_change.css";
import * as BookAPI from "../js/BooksAPI";
const ShelfChanger = ({ value = "none", bookId }) => {
  function updateBook(e) {
    BookAPI.update({ id: bookId }, e.target.value).then(() =>
      window.location.reload()
    );
  }
  return (
    <div className="shelf-changer">
      <select value={value} onChange={updateBook}>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default ShelfChanger;
